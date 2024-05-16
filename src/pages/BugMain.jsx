import React, { useEffect, useState } from 'react';
import '../styles/BugMain/bugmain.scss';
import MyContainer from '../components/BugMain/MyContainer';
import NavbarDarkExample from '../components/BugMain/bootstrap';
import BugData from '../components/BugMain/BugData.json';

export default function BugMain() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedBug, setSelectedBug] = useState(null);

  useEffect(() => {
    setData(BugData);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // console.log('조회 버튼이 클릭되었습니다. 입력된 값:', inputValue);

    const filteredData = BugData.filter((item) => {
      return item.name.includes(inputValue) || item.crop.includes(inputValue);
    });

    const categorizedData =
      selectedCategory !== '전체'
        ? filteredData.filter((item) => item.category === selectedCategory)
        : filteredData;

    setData(categorizedData);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedBug(null);
  };

  useEffect(() => {
    if (selectedBug) {
      console.log('선택한 병원체 정보:', selectedBug);
    }
  }, [selectedBug]);

  const filteredData =
    selectedCategory !== '전체'
      ? data.filter((item) => item.category === selectedCategory)
      : data;

  return (
    <div className="body-title">
      <div className="bug-title">병해충 도감</div>
      <div className="line"></div>
      <div className="BugPageMain">
        <div className="Main-Main">
          <div className="search-container">
            <div className="bootstrap-container">
              <NavbarDarkExample onItemClick={handleCategorySelect} />
            </div>
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
