/* 미세먼지 위젯 */

import { useEffect, useState } from 'react';
import '../../styles/Main/main.scss';

// 서울시 미세먼지 API
const DUST_API = {
  key: process.env.REACT_APP_DUST_API,
  base: '',
};

export default function Dust() {
  const [error, setError] = useState('');
  const [dustGrade, setDustGrade] = useState('');
  const [place, setPlace] = useState('');
  const [bgClass, setBgClass] = useState('');

  useEffect(() => {
    getDust();
  });

  // 데이터 불러오기
  const getDust = () => {
    let dust_url = `/dust_api/${DUST_API.key}/json/RealtimeCityAir/1/25/`;
    fetch(dust_url)
      .then((response) => response.json())
      .then((data) => {
        // 중구 정보만 추출
        const jungguData = data.RealtimeCityAir.row[0];
        setPlace(jungguData.MSRSTE_NM);
        setDustGrade(jungguData.IDEX_NM);

        // 중구 미세먼지 정도에 따라 다른 배경색 지정
        if (jungguData.IDEX_NM === '좋음') {
          setBgClass('good');
        } else if (jungguData.IDEX_NM === '보통') {
          setBgClass('normal');
        } else {
          setBgClass('bad');
        }
      })
      .catch((error) => setError('ERROR'));
  };

  // 위젯 클릭시 네이버 미세먼지 정보 페이지로 이동
  const goToNaverDust = () => {
    let url = `https://weather.naver.com/air`;
    window.open(url, '_blank'); // 새 창에서 열기
  };

  return (
    <div className={`dust-box ${bgClass}`} onClick={goToNaverDust}>
      <div className="dust-info">
        오늘의 미세먼지 현황
        <br />
        <div className="dust-place">{place}</div>
        <div className="dust-grade">{dustGrade}</div>
      </div>
      {error && <div>{error}</div>}
    </div>
  );
}
