import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/FarmInfo/farmInfo.scss';
import Copy from './Copy'; // CopyToClipboard 컴포넌트 가져오기
import imageUrls from '../../assets/farm/data'; // 이미지 URL 배열 가져오기

export default function FarmInfoContainer() {
  const [farmInfo, setFarmInfo] = useState(null); // 초기값을 null로 설정
  const [loading, setLoading] = useState(true); // 로딩 상태를 추가
  const { farmName } = useParams();

  useEffect(() => {
    const fetchFarmInfo = async () => {
      try {
        const response = await fetch(
          `https://data.gm.go.kr/openapi/weekendfarm?key=${process.env.REACT_APP_FARMINFO_API_KEY}&Type=json&pIndex=1&pSize=100`,
        );
        const jsonData = await response.json();

        const selectedFarm = jsonData.weekendfarm[1].row.find(
          (info) => info.FARM_NAME === farmName.replace('_', ' '),
        );

        // 이미지 URL을 랜덤하게 선택하여 farmInfo에 추가
        if (selectedFarm) {
          const randomIndex = Math.floor(Math.random() * imageUrls.length);
          selectedFarm.imgUrl = imageUrls[randomIndex];
          setFarmInfo(selectedFarm);
        } else {
          console.log('Farm not found:', farmName);
          setFarmInfo(null); // 농장 정보를 찾을 수 없는 경우
        }
      } catch (error) {
        console.log('Error fetching farm info:', error);
        setFarmInfo(null); // 에러 발생 시 농장 정보를 null로 설정
      } finally {
        setLoading(false); // 로딩 상태 해제
      }
    };

    fetchFarmInfo();
  }, [farmName]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="farm-info-container">
        {farmInfo ? (
          <>
            <h2 className="farm-name">{farmInfo.FARM_NAME}</h2>
            <ul className="farm-details">
              <li>
                <Copy className="copy" text={farmInfo.ADDRESS} />
                <p>🌱 주소 : {farmInfo.ADDRESS}</p>
                <p>🌱 규모 : {farmInfo.SCALE}</p>
                <p>🌱 운영 시작일 : {farmInfo.USE_START_DATE}</p>
                <p>🌱 텃밭면적(m2) : {farmInfo.VEGE_AREA}</p>
                <div className="button-container">
                  <span>🌱 주말농장 신청 바로가기 : </span>
                  <button
                    className="custom-button"
                    onClick={() => {
                      window.open(
                        'http://www.gm.go.kr/pt/cp/weekendFarm/info.do',
                        '_blank',
                      );
                    }}
                  >
                    Go
                  </button>
                </div>
              </li>
            </ul>
          </>
        ) : (
          <div>검색결과가 없습니다.</div>
        )}
      </div>
    </>
  );
}
