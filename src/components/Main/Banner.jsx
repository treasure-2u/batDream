import React, { useState } from 'react';
import '../../styles/Main/banner.scss';
import bannerImage from '../../assets/main/banner.svg';

const Banner = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log('검색어:', searchTerm);
  };

  return (
    <div className="banner">
      {/* <div className="banner__image"> */}
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
      {/* </div> */}
    </div>
  );
};

export default Banner;
