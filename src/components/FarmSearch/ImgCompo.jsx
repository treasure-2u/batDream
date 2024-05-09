import React, { useState, useEffect } from 'react';
import { imgArr } from '../../utils/imgarr';
import { xml2js } from 'xml-js';

const ImgCompo = () => {
  const [image, setImage] = useState('');
  const [farms, setFarms] = useState([]);
  const [error, setError] = useState(null);
  const [loadedFarmNames, setLoadedFarmNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 무작위 이미지 선택
        const randomIndex = Math.floor(Math.random() * imgArr.length);
        const randomImage = imgArr[randomIndex];
        setImage(randomImage);

        // API에서 데이터 가져오기
        const response = await fetch(
          'https://data.gm.go.kr/openapi/weekendfarm',
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        // XML을 텍스트로 읽어오기
        const xmlText = await response.text();
        // XML을 JavaScript 객체로 변환
        const parsedXml = xml2js(xmlText, { compact: true });
        // console.log(parsedXml);

        // 필요한 데이터를 추출
        const farmsData = parsedXml.weekendfarm?.row || [];

        // 데이터가 존재하지 않을 경우 콘솔창에 출력
        if (farmsData.length === 0) {
          console.error('No data available in the API response.');
          return;
        }
        setFarms(farmsData);
        console.log(farmsData);

        // 이미 불러온 농장명을 추적하기 위한 변수
        const loadedFarmNames = farms.map((farm) => farm.FARM_NAME);
        console.log(loadedFarmNames);

        // 중복을 방지하며, 무작위로 선택된 농장을 찾음
        const randomFarm = farmsData.find(
          (farm) => !loadedFarmNames.includes(farm.FARM_NAME?._text),
        );
        console.log(randomFarm);

        if (!randomFarm || !randomFarm.FARM_NAME || !randomFarm.ADDRESS) {
          console.error(
            'Incomplete farm information found in the API response.',
          );
          return;
        }

        // 선택된 농장 데이터를 형식에 맞게 포맷
        const formattedFarm = {
          name: randomFarm.FARM_NAME._text || '', // 농장명
          address: randomFarm.ADDRESS._text || '', // 주소
        };

        // 포맷된 농장 데이터를 상태 변수 farms에 추가합니다.
        setFarms([...farms, formattedFarm]);
        setLoadedFarmNames([...loadedFarmNames, formattedFarm.name]);
      } catch (error) {
        // 에러 발생 시 에러 상태 업데이트
        setError(error);
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);

  // 에러가 발생한 경우 에러 메시지 출력
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // 이미지와 함께 API에서 가져온 농장 정보 표시
  return (
    <div>
      {image && (
        <div className="farmSearchImg">
          <img
            key={image}
            src={`/img/farmImages/farmImg${image}.jpg`}
            alt={`Image ${image}`}
            className="farm-image"
          />
        </div>
      )}
      <div className="farmSearchContent">
        {farms.map((farm, index) => (
          <div key={index}>
            <p>농장명: {farm.name}</p>
            <p>주소: {farm.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImgCompo;
