import React, { useEffect, useState } from 'react';
import '../styles/Plant/PlantMain.scss';
import PlantBox from '../components/PlantMain/PlantBox';
import PageNation from '../components/PlantMain/PageNation';
import SortButton from '../components/PlantMain/SortButton';

export default function PlantMain() {
  const [inputValue, setInputValue] = useState('');
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);

  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchPlants = () => {
      fetch(
        `/proxy_plants/service/varietyInfo/varietyList?apiKey=${process.env.REACT_APP_PLANT_API_KEY}&categoryCode=FC&pageNo=${currentPageNum}`,
      )
        .then((response) => response.text())
        .then((xmlString) => {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
          const itemElements = Array.from(
            xmlDoc.getElementsByTagName('item'),
          ).map((item) => ({
            svcCodeNm: item.querySelector('svcCodeNm').textContent,
            mainChartrInfo: item.querySelector('mainChartrInfo').textContent,
            imgFileLinkOriginal: item.querySelector('imgFileLinkOriginal')
              .textContent,
          }));
          setPlants(itemElements);
          setFilteredPlants(itemElements);

          // 전체 페이지 수 계산
          const totalCount = xmlDoc.querySelector('totalCount').textContent;
          const pages = Math.ceil(totalCount / 5); // 한 페이지에 10개씩 표시
          setTotalPages(pages);
        })
        .catch((error) => console.log(error));
    };

    fetchPlants();
  }, [currentPageNum]); // fetchPlants 함수를 의존성 배열에서 제거

  const handleSearch = () => {
    if (inputValue === '') {
      setFilteredPlants(plants);
      return;
    }

    const filteredPlants = plants.filter((plant) =>
      plant.svcCodeNm.includes(inputValue),
    );
    setFilteredPlants(filteredPlants);
  };

  const handleSort = () => {
    const sortedPlants = [...filteredPlants].sort((a, b) =>
      a.svcCodeNm.localeCompare(b.svcCodeNm),
    );
    setFilteredPlants(sortedPlants);
  };

  const handlePageChange = (pageNum) => {
    setCurrentPageNum(pageNum);
  };

  return (
    <div className="plant-main-container">
      <div className="plant-title">식물 도감</div>
      <div className="titleLine"></div>
      <div className="searchWrapper">
        <div className="searchContainer">
          <form className="searchBox">
            <input
              type="text"
              placeholder="식물명을 입력하세요."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              className="searchButton"
              type="button"
              onClick={handleSearch}
            >
              조회
            </button>
            <SortButton onClick={handleSort} /> {/* 추가된 부분 */}
          </form>
        </div>
      </div>

      {filteredPlants.map((plant, index) => (
        <PlantBox
          key={index}
          title={true}
          svcCodeNm={plant.svcCodeNm}
          mainChartrInfo={plant.mainChartrInfo}
          imgFileLinkOriginal={plant.imgFileLinkOriginal}
        />
      ))}
      <div>
        <PageNation
          totalPages={totalPages}
          currentPageNum={currentPageNum}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
