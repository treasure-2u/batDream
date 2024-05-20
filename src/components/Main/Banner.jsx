// Banner.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Main/main.scss';
import bannerImage from '../../assets/main/banner.svg';

const ModifiedBanner = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // navigate(`/FarmInfo/${searchTerm.replace(' ', '_')}`);
    navigate(`/FarmInfo/${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className="modified-banner">
      <img src={bannerImage} alt="" />
      <h1>주말, 농장의 자연과 함께</h1>
      <p>
        모든 순간이 당신에게
        <br />
        소중한 추억으로 남을 것입니다.
      </p>

      <div className="search-bar">
        <input
          type="text"
          placeholder="텃밭명을 입력해주세요."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>검색</button>
      </div>
    </div>
  );
};

export default ModifiedBanner;
