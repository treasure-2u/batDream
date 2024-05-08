import React, { useEffect, useState } from 'react';
import '../styles/BugMain/bugmain.scss';
import MyContainer from '../components/BugMain/MyContainer';
import '../components/BugMain/bootstrap';
import NavbarDarkExample from '../components/BugMain/bootstrap';

export default function BugMain() {
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    fetch(
      'http://ncpms.rda.go.kr/npmsAPI/service?apiKey=2024f1d469686206bdf5a3bd65ead0ba092d&serviceCode=SVC03&serviceType=AA003',
    )
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = () => {
    // 조회 버튼 클릭 시 실행되는 함수
    console.log('조회 버튼이 클릭되었습니다. 입력된 값:', inputValue);

    // 여기서 서버로 데이터를 전송가능
  };

  return (
    <div className="body-title">
      <div className="bug-title">병해충 도감</div>
      <div className="line"></div>

      <div className="BugPageMain">
        <div className="bootstrap-container">
          <div className="Kategorie-title">병해충 정보</div>
          <NavbarDarkExample />
        </div>
        <div className="Main-Main">
          <div className="search-container">
            <div>병원체/작물명</div>
            <form className="input">
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

          <div className="api-container-title">
            <div className="api-item">순번</div>
            <div className="api-item">작물</div>
            <div className="api-item">이름</div>
            <div className="api-item">영문영</div>
            <div className="api-item">대표사진</div>
          </div>

          <MyContainer
            order="1"
            crop="바나나"
            name="Banana"
            englishName="Banana"
            mainImage="[대표사진]"
          />
          <MyContainer
            order="1"
            crop="바나나"
            name="Banana"
            englishName="Banana"
            mainImage="[대표사진]"
          />
        </div>
      </div>
    </div>
  );
}
