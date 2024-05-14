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
    let url = `http://openAPI.seoul.go.kr:8088/${DUST_API.key}/json/RealtimeCityAir/1/25/`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // 서울시 25개 지역구 중에 강동구만 추출
        const gangdongData = data.RealtimeCityAir.row[24];
        setPlace(gangdongData.MSRSTE_NM);
        setDustGrade(gangdongData.IDEX_NM);

        // 미세먼지 정도에 따라 다른 배경색 지정
        if (gangdongData.IDEX_NM === '좋음') {
          setBgClass('good');
        } else if (gangdongData.IDEX_NM === '보통') {
          setBgClass('normal');
        } else {
          setBgClass('bad');
        }
      })
      .catch((error) => setError('ERROR'));
  };

  return (
    <div className={`dust-box ${bgClass}`}>
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
