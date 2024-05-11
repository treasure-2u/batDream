import React, { useEffect, useState } from 'react';
import '../styles/Plant/PlantMain.scss';
import PlantBox from '../components/PlantMain/PlantBox';
import Dropdown from '../components/PlantMain/DropDown';
import PageNation from '../components/PlantMain/PageNation';

export default function PlantMain() {
  const [inputValue, setInputValue] = useState('');
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('품종');
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchPlants();
  }, [currentPageNum]); // currentPageNum이 변경될 때마다 데이터를 새로 가져옴

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
        const pages = Math.ceil(totalCount / 10); // 한 페이지에 10개씩 표시
        setTotalPages(pages);
      })
      .catch((error) => console.log(error));
  };

  const handleDropdownSelect = (selectedItem) => {
    setSelectedCategory(selectedItem);
  };

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

  const handlePageChange = (pageNum) => {
    setCurrentPageNum(pageNum);
  };

  return (
    <div className="plant-main-container">
      <div className="plant-title">식물 도감</div>
      <div className="titleLine"></div>
      <div className="searchWrapper">
        <div className="searchContainer">
          <Dropdown onSelect={handleDropdownSelect} />
          <div>식물명</div>
          <form className="searchBox">
            <input
              type="text"
              placeholder="검색어를 입력하세요."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="button" onClick={handleSearch}>
              조회
            </button>
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
