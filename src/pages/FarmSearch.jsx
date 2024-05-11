// 주말농장 상세 - 농장 찾기
import NameFilterCompo from '../components/FarmSearch/NameFilterCompo';
import ImgCompo from '../components/FarmSearch/ImgCompo';
import Paging from '../components/FarmSearch/Paging';
import React, { useState, useEffect } from 'react';
import { xml2js } from 'xml-js';
import { imgArr } from '../utils/imgarr';

export default function FarmSearch() {
  const [farms, setFarms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // API에서 데이터 가져오기
        const response = await fetch(
          `https://data.gm.go.kr/openapi/weekendfarm?key=${process.env.REACT_APP_FARMINFO_API_KEY}`, // API 주소에 API 키를 포함하여 요청
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

        // name,address 값만 추출
        const farmInfo = farmsData.map((farm) => ({
          name: farm.FARM_NAME._text,
          address: farm.ADDRESS._text,
        }));
        setFarms(farmInfo);
        // console.log(farmInfo);
      } catch (error) {
        // 에러 발생 시 에러 상태 업데이트
        setError(error);
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);

  // 첫 4개 농장의 이미지 URL만 추출
  const imageUrls = farms.slice(0, 4).map((farm, index) => imgArr[index]);
  console.log(imageUrls);

  return (
    <div>
      <NameFilterCompo />
      <div>
        {imageUrls.map((imageUrl, index) => (
          <ImgCompo key={index} farm={farms[index]} imgUrl={imageUrl} />
        ))}
        <Paging />
      </div>
    </div>
  );
}
