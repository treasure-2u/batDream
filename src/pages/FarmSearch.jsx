import React, { useState, useEffect } from 'react';
import { xml2js } from 'xml-js';
import imageUrls from '../assets/farm/data.js';
import PageNation from '../components/PlantMain/PageNation';
import AreaFilterCompo from '../components/FarmSearch/AreaFilterCompo.jsx';
import NameFilterCompo from '../components/FarmSearch/NameFilterCompo.jsx';
import ImgCompo from '../components/FarmSearch/ImgCompo';
import '../styles/FarmSearch/FarmSearch.scss';

export default function FarmSearch() {
  const [farms, setFarms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [farmArr, setFarmArr] = useState([]); // 현재 페이지에 따라 보여줄 농장 배열 (농장 정보와 이미지를 합친 객체의 배열)
  const [displayedFarms, setDisplayedFarms] = useState([]); // 검색 결과로 보여줄 농장 배열
  // const [searchInput, setSearchInput] = useState(''); // 검색어 상태 추가
  const [noResultsFound, setNoResultsFound] = useState(false);

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
        currentFarmArr(1, combinedFarms);
        setFarms(combinedFarms); // 병합된 데이터 저장
        setDisplayedFarms(combinedFarms); // 검색 결과로 보여줄 농장 배열 초기화
      } catch (error) {
        // 에러 발생 시 에러 상태 업데이트
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    currentFarmArr(currentPage, displayedFarms);

    setNoResultsFound(displayedFarms.length === 0);
  }, [currentPage, displayedFarms]);

  const currentFarmArr = (currPage, farms) => {
    if (currPage === 1) {
      setFarmArr(farms.slice(0, 4));
    } else {
      setFarmArr(farms.slice(currPage * 4 - 4, currPage * 4));
    }
  };

  // const handleSearch = () => {
  //    const filteredFarms = farms.filter((farm) =>
  //      farm.FARM_NAME._text.includes(searchInput),
  //    );
  //    setDisplayedFarms(filteredFarms);
  //    setCurrentPage(1); // 검색 후 첫 페이지로 이동
  // };

  const handleAreaChange = (area) => {
    if (area) {
      const filteredFarms = farms.filter((farm) =>
        farm.ADDRESS._text.includes(area),
      );
      setDisplayedFarms(filteredFarms);
    } else {
      setDisplayedFarms(farms);
    }
    setCurrentPage(1);
  };

  return (
    <div>
      <div className="farmFilter">
        <NameFilterCompo
          farms={farms}
          setDisplayedFarms={setDisplayedFarms}
          // handleSearch={handleSearch}
          // setSearchInput={setSearchInput}
        />
        <AreaFilterCompo handleAreaChange={handleAreaChange} />
      </div>
      <div className="farmImg">
        {farmArr.map((farmInfo, index) => (
          <ImgCompo key={index} farm={farmInfo} />
        ))}
        {noResultsFound && (
          <div className="noMatchMessage">검색 결과가 존재하지 않습니다.</div>
        )}
      </div>
      <PageNation
        totalPages={Math.ceil(displayedFarms.length / 4)}
        currentPageNum={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
