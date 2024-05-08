import React, { useState } from 'react';

export default function AreaFilterCompo() {
  const [selectedArea, setSelectedArea] = useState('');
  const handleChangeArea = (e) => {
    setSelectedArea(e.target.value);
  };
  return (
    <div>
      <select value={selectedArea} onChange={handleChangeArea}>
        <option value={''}>지역선택</option>
        <option value="종로구">종로구</option>
        <option value="중구">중구</option>
        <option value="동대문구">동대문구</option>
        <option value="성동구">성동구</option>
        <option value="성북구">성북구</option>
        <option value="도봉구">도봉구</option>
        <option value="서대문구">서대문구</option>
        <option value="마포구">마포구</option>
        <option value="영등포구">영등포구</option>
        <option value="관악구">관악구</option>
        <option value="강남구">강남구</option>
      </select>
    </div>
  );
}
