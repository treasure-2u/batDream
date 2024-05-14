import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const WeekendFarmInfo = () => {
  const [farmInfo, setFarmInfo] = useState([]);
  const { farmName } = useParams();

  useEffect(() => {
    const fetchFarmInfo = async () => {
      try {
        const response = await fetch(
          `https://data.gm.go.kr/openapi/weekendfarm?key=${process.env.REACT_APP_FARMINFO_API_KEY}&Type=json&pIndex=1&pSize=100`,
        );
        const jsonData = await response.json();
        setFarmInfo(jsonData.weekendfarm[1].row);
      } catch (error) {
        console.error('Error fetching farm info:', error);
      }
    };

    fetchFarmInfo();
  }, []);

  // farmName에 해당하는 농장만 선택
  const selectedFarm = farmInfo.find((info) => info.FARM_NAME === farmName);

  return (
    <div>
      <h2>주말농장 정보</h2>
      {selectedFarm ? (
        <ul>
          <li>
            <p>주말농장명: {selectedFarm.FARM_NAME}</p>
            <p>주소: {selectedFarm.ADDRESS}</p>
            <p>규모: {selectedFarm.SCALE}</p>
            <p>운영 시작일: {selectedFarm.USE_START_DATE}</p>
            <p>운영 종료일: {selectedFarm.USE_END_DATE}</p>
            <p>텃밭면적(m2): {selectedFarm.VEGE_AREA}</p>
            <p>참고사항: {selectedFarm.ETC}</p>
          </li>
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeekendFarmInfo;
