import React from 'react';
import '../../styles/Main/mainList.scss';
import recommendationImage from '../../assets/recommend.svg'; // 추천작물 이미지를 가져옵니다.

const Recommendation = () => {
  return (
    <div className="Recommemd-container">
      <div className="Recommendation">
        <h2>밭드림,</h2>
        <p>
          밭드림은 '밭'에서 꿈을 <strong>'드림(Dream)'</strong> 이라는 의미로,
          <br />
          주말농장에서 자신의 꿈을 키우는 것을 의미합니다.
          <br />
          농사 지을 밭과 꿈을 이루는 드림의 말장난 <strong>+</strong> 주말농장이
          밭을 <br />
          빌려주는 형식으로 밭을 준다(밭드림)는 직관적인 표현 사용.
        </p>
      </div>
      <div className="description-container">
        <div className="description">
          <h3>B</h3>
          <p>
            <strong>B</strong>outiful harvest, fields wide
          </p>
          <p className="Pcolor">풍부한 수확, 넓은 들판,</p>
        </div>

        <div className="description">
          <h3>A</h3>
          <p>
            <strong>A</strong>bundant joy, where dreams reside.
          </p>
          <p className="Pcolor">풍요로운 기쁨, 꿈이 있는 곳.</p>
        </div>

        <div className="description">
          <h3>T</h3>
          <p>
            <strong>T</strong>hriving farm, nature's pride.
          </p>
          <p className="Pcolor">번영하는 농장, 자연의 자랑.</p>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
