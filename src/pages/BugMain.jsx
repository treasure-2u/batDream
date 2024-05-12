import React, { useEffect, useState } from 'react';
import '../styles/BugMain/bugmain.scss';
import MyContainer from '../components/BugMain/MyContainer';
import NavbarDarkExample from '../components/BugMain/bootstrap';
import BugData from '../components/BugMain/BugData.json';

export default function BugMain() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('전체'); // 초기값을 전체로 설정
  const [selectedBug, setSelectedBug] = useState(null); // 선택한 병원체 정보

  useEffect(() => {
    setData(BugData);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('조회 버튼이 클릭되었습니다. 입력된 값:', inputValue);

    // 전체 데이터에서 필터링 대상을 찾습니다.
    const filteredData = BugData.filter((item) => {
      // 이름 또는 작물에 검색어가 포함되는지 확인합니다.
      return item.name.includes(inputValue) || item.crop.includes(inputValue);
    });

    // 선택된 카테고리에 따라 데이터를 필터링합니다.
    const categorizedData =
      selectedCategory !== '전체'
        ? filteredData.filter((item) => item.category === selectedCategory)
        : filteredData;

    setData(categorizedData);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedBug(null); // 선택한 병원체 정보 초기화
  };

  // 선택한 병원체 정보가 있을 경우 해당 정보를 찾아서 설정
  useEffect(() => {
    if (selectedBug) {
      // 선택한 병원체 정보를 여기서 처리
      // 예를 들어, API 호출이나 데이터 처리 등
      // 이 예시에서는 간단하게 콘솔에 출력하는 것으로 대체
      console.log('선택한 병원체 정보:', selectedBug);
    }
  }, [selectedBug]);

  // 선택된 카테고리에 따라 데이터 필터링
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filteredData =
      selectedCategory !== '전체'
        ? data.filter((item) => item.category === selectedCategory)
        : data;
    setFilteredData(filteredData);
  }, [data, selectedCategory]);

  return (
    <div className="body-title">
      <div className="bug-title">병해충 도감</div>
      <div className="line"></div>

      <div className="BugPageMain">
        <div className="bootstrap-container">
          <div className="Kategorie-title">병해충 정보</div>
          <NavbarDarkExample onItemClick={handleCategorySelect} />
        </div>
        <div className="Main-Main">
          <div className="search-container">
            <div>이름/작물명</div>
            <form className="input" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="검색어를 입력하세요."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button type="submit">조회</button>
            </form>
          </div>
          <div className="api-container-title">
            <div className="api-item">순번</div>
            <div className="api-item">작물</div>
            <div className="api-item">이름</div>
            <div className="api-item">영문영</div>
            <div className="api-item">대표사진</div>
          </div>
          <MyContainer data={filteredData} setSelectedBug={setSelectedBug} />
        </div>
      </div>
    </div>
  );
}
