import React, { useState } from 'react';

export default function NameFilterCompo({ farms, setDisplayedFarms }) {
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setSearchInput(userInput);
    const filteredFarms = farms.filter((farm) =>
      farm.FARM_NAME._text.includes(userInput),
    );
    setDisplayedFarms(filteredFarms);
  };

  return (
    <div className="filter nameFilter">
      <div className="name filterName">텃밭명</div>
      <div className="searchInput">
        <input
          type="text"
          placeholder="텃밭명을 입력하세요."
          value={searchInput}
          onChange={handleInputChange}
        />
      </div>
      <div className="SearchBtnContainer">
        <button className="SearchBtn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
          검색
        </button>
      </div>
    </div>
  );
}
