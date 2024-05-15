// 주말농장 상세 - 농장 찾기
import NameFilterCompo from '../components/FarmSearch/NameFilterCompo';
import ImgCompo from '../components/FarmSearch/ImgCompo';
import React, { useState, useEffect } from 'react';
import { xml2js } from 'xml-js';
import imageUrls from '../assets/farm/data.js';
import PageNation from '../components/PlantMain/PageNation';
import AreaFilterCompo from '../components/FarmSearch/AreaFilterCompo.jsx';
import '../styles/FarmSearch/FarmSearch.scss';

export default function FarmSearch() {
  const [farms, setFarms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [farmArr, setFarmArr] = useState([]); // 현재 페이지에 따라 보여줄 농장 배열 (농장 정보와 이미지를 합친 객체의 배열)

  const currentFarmArr = (currPage, farmsArr) => {
    if (currPage == 1) {
      farmsArr
        ? setFarmArr(farmsArr.slice(0, 4))
        : setFarmArr(farms.slice(0, 4));
    } else {
      farmsArr
        ? setFarmArr(farmsArr.slice((currPage * 4 - 4, currPage * 4)))
        : setFarmArr(farms.slice(currPage * 4 - 4, currPage * 4));
    }
  };

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

        // 데이터 병합
        const combinedFarms = farmsData.map((farm, index) => ({
          ...farm,
          imgUrl: imageUrls[index % imageUrls.length],
        }));

        // fetchData가 완료된 후에 currentFarmArr 실행
        currentFarmArr(currentPage, combinedFarms);
        setFarms(combinedFarms); // 병합된 데이터 저장
      } catch (error) {
        // 에러 발생 시 에러 상태 업데이트
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    currentFarmArr(currentPage);
  }, [currentPage]);

  return (
    <div>
      <div className="farmFilter">
        <NameFilterCompo />
        <AreaFilterCompo />
      </div>
      <div className="farmImg">
        {farmArr.map((farmInfo, index) => (
          <ImgCompo key={index} farm={farmInfo} />
        ))}
      </div>
      <PageNation
        totalPages={Math.ceil(farms.length / 4)}
        currentPageNum={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
