import React, { useState } from 'react';
import '../../styles/FarmSearch/nameFilter.scss';
import AreaFilterCompo from './AreaFilterCompo';

export default function NameFilterCompo() {
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="farmFilter">
      <div className="nameFilter">
        <div className="nameFilter name">텃밭명</div>
        <div className="searchInput">
          <input
            type="text"
            placeholder="검색어를 입력하세요."
            value={searchInput}
            onChange={handleInputChange}
          />
        </div>
        <div className="SearchBtn">
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
        </div>
      </div>
      <div className="areaFilter">
        <div className="areaFilter name">지역명</div>
        <AreaFilterCompo />
      </div>
    </div>
  );
}
