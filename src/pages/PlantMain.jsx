import React, { useEffect, useState } from 'react';
import '../styles/Plant/PlantMain.scss';
import PlantBox from '../components/PlantMain/PlantBox';
import Dropdown from '../components/PlantMain/DropDown';
import Paging from '../components/FarmSearch/Paging';

export default function PlantMain() {
  const [inputValue, setInputValue] = useState('');
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('품종');
  const [currentPageNum, setCurrentPageNum] = useState(1);

  useEffect(() => {
    fetch(
      `/proxy_plants/service/varietyInfo/varietyList?apiKey=20240507Y4ET9OVWBXBGGXEDIH0KA&categoryCode=FC&pageNo=${currentPageNum}`,
    )
      .then((response) => response.text())
      .then((xmlString) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
        const itemElements = Array.from(
          xmlDoc.getElementsByTagName('item'),
        ).map((item) => {
          return {
            svcCodeNm: item.querySelector('svcCodeNm').textContent,
            mainChartrInfo: item.querySelector('mainChartrInfo').textContent,
            imgFileLinkOriginal: item.querySelector('imgFileLinkOriginal')
              .textContent,
          };
        });
        setPlants(itemElements);
        setFilteredPlants(itemElements);
      })
      .catch((error) => console.log(error));
  }, [currentPageNum]);

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
        <Paging />
      </div>
    </div>
  );
}
