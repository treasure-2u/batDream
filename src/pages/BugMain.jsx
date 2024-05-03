import React, { useEffect, useState } from 'react';
import '../styles/BugMain/bugmain.scss';
import MyContainer from '../components/BugMain/BugMain';
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
    <div>
      <header>헤더자리</header>
      <div className="bug-title">병해충 도감</div>
      <div className="line"></div>
      <NavbarDarkExample />
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

      <MyContainer
        title={true}
        order="1"
        crop="바나나"
        name="Banana"
        englishName="Banana"
        mainImage="[대표사진]"
      />
      <MyContainer
        title={false}
        order="2"
        crop="사과"
        name="apple"
        englishName="apple"
        mainImage="[사과사진]"
      />
      <MyContainer
        title={false}
        order="3"
        crop="회"
        name="회 졸맛"
        englishName="회 졸맛탱"
        mainImage="[회먹으러가자]"
      />
      <MyContainer
        title={false}
        order="4"
        crop="4"
        name="회 4"
        englishName="회 4"
        mainImage="[4]"
      />

      <footer>푸더자리</footer>
    </div>
  );
}
