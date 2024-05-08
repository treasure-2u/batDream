import React from 'react';
import '../../styles/Main/banner.scss';
import bannerImage from '../../assets/banner.svg';

const Banner = () => {
  return (
    <div>
      <div className="banner__image">
        <img src={bannerImage} alt="주말, 농장의 자연과 함께" />
      </div>
      <div className="banner__text">
        <h1>주말, 농장의 자연과 함께</h1>
        <p>모든 순간이 당신에게 소중한 추억으로 남을 것입니다.</p>
      </div>
    </div>
  );
};

export default Banner;
