// FarmInfoContainer.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/FarmInfo/farmInfo.scss';
import Copy from './Copy'; // CopyToClipboard 컴포넌트 가져오기
import NotFound from '../../pages/NotFound'; // NotFound 컴포넌트 가져오기

export default function FarmInfoContainer() {
  const [farmInfo, setFarmInfo] = useState([]);
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

        setFarmInfo(selectedFarm);
      } catch (error) {
        console.error('Error fetching farm info:', error);
      }
    };

    fetchFarmInfo();
  }, [farmName]);

  if (!farmInfo) {
    return <NotFound />;
  }

  return (
    <>
      <div className="farm-info-container">
        <h2 className="farm-name">{farmInfo.FARM_NAME}</h2>
        {farmInfo ? (
          <ul className="farm-details">
            {' '}
            {/* Added class for styling */}
            <li>
              <p>
                <Copy className="copy" text={farmInfo.ADDRESS}>
                  🌱 주소 : {farmInfo.ADDRESS}
                </Copy>
              </p>
              <p>🌱 규모 : {farmInfo.SCALE}</p>
              <p>🌱 운영 시작일 : {farmInfo.USE_START_DATE}</p>
              <p>🌱 텃밭면적(m2) : {farmInfo.VEGE_AREA}</p>
              <div className="button-container">
                {' '}
                {/* Added class for styling */}
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
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
