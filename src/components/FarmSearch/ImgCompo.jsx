import React, { useState, useEffect } from 'react';
import { imgArr } from '../../utils/imgarr';
import { xml2js } from 'xml-js';

const ImgCompo = () => {
  const [image, setImage] = useState('');
  const [farms, setFarms] = useState([]);
  const [error, setError] = useState(null);

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
        // XML을 텍스트로 읽어옵니다.
        const xmlText = await response.text();
        // XML을 JavaScript 객체로 변환합니다.
        const parsedXml = xml2js(xmlText, { compact: true });
        console.log(parsedXml);

        // 필요한 데이터를 추출합니다.
        const farmsData = parsedXml.weekendfarm.rows.map((row) => ({
          name: row.find((e) => e.name === 'FARM_NAME')?.elements[0].text || '',
          address:
            row.find((e) => e.name === 'ADDRESS')?.elements[0].text || '',
        }));
        // console.log(farmsData);
        // console.log(farmsData);
        console.log('aa');

        // setFarms(farmsData);
      } catch (error) {
        // 에러 발생 시 에러 상태 업데이트
        setError(error);
        console.log('eee');
      }
    };

    fetchData();
  }, []);

  // 에러가 발생한 경우 에러 메시지 출력
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // 농장 데이터가 아직 없는 경우 로딩 중 메시지 출력
  if (farms.length === 0) {
    return <div>Loading...</div>;
  }

  // 이미지와 함께 API에서 가져온 농장 정보 표시
  return (
    <div>
      <div className="farmSearchImg">
        <img
          key={image}
          src={`/img/farmImages/farmImg${image}.jpg`}
          alt={`Image ${image}`}
          className="farm-image"
        />
      </div>
      <div className="farmSearchContent">
        {farms.map((farm, index) => (
          <div key={index}>
            <p>Name: {farm.name}</p>
            <p>Address: {farm.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImgCompo;
