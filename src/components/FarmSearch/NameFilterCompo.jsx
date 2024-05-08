import React, { useState } from 'react';

export default function NameFilterCompo() {
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <div className="searchInput">
        <input
          type="text"
          placeholder="검색어를 입력하세요."
          value={searchInput}
          onChange={handleInputChange}
        />
      </div>
      <div className="SearchBtn">검색</div>
    </div>
  );
}
