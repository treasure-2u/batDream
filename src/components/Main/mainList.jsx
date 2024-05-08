import React from 'react';
import '../../styles/Main/mainList.scss';
import recommendationImage from '../../assets/recommend.svg'; // 추천작물 이미지를 가져옵니다.

const Recommendation = () => {
  return (
    <div className="Recommemd-container">
      <div className="Recommendation">
        <h2>밭드림,</h2>
        <p>
          밭드림은 '밭'에서 꿈을 '드림(Dream)'이라는 의미로,
          <br />
          주말농장에서 자신의 꿈을 키우는 것을 의미합니다.
          <br />
          농사 지을 밭과 꿈을 이루는 드림의 말장난 + 주말농장이 밭을 빌려주는
          형식이므로
          <br />
          밭을 준다(밭드림)는 직관적인 표현 사용.
        </p>
      </div>
      <div className="image-container">
        <img src={recommendationImage} alt="추천작물" />
        <div className="description">
          <h3>추천작물</h3>
          <p>
            주말농장에서는 다양한 작물을 재배할 수 있습니다.
            <br /> 주변 환경에 적합한 토마토, 상추, 당근 등의 작물을 재배하는
            것을 추천합니다.
          </p>
          <p>
            이러한 작물들은 특별한 관리가 필요하지 않으며,
            <br /> 주말농장에서 즐겁고 손쉽게 재배할 수 있습니다.
            <br /> 더 나은 환경을 위해 자연친화적인 방법으로 재배할 수 있는 팁도
            함께 제공됩니다.
          </p>
        </div>
        <button>바로가기</button>
      </div>
      <div className="image-container">
        <img src={recommendationImage} alt="추천작물" />
        <div className="description">
          <h3>추천작물</h3>
          <p>
            주말농장에서는 다양한 작물을 재배할 수 있습니다.
            <br /> 주변 환경에 적합한 토마토, 상추, 당근 등의 작물을 재배하는
            것을 추천합니다.
          </p>
          <p>
            이러한 작물들은 특별한 관리가 필요하지 않으며,
            <br /> 주말농장에서 즐겁고 손쉽게 재배할 수 있습니다.
            <br /> 더 나은 환경을 위해 자연친화적인 방법으로 재배할 수 있는 팁도
            함께 제공됩니다.
          </p>
        </div>
        <button>바로가기</button>
      </div>
      <div className="image-container">
        <img src={recommendationImage} alt="추천작물" />
        <div className="description">
          <h3>추천작물</h3>
          <p>
            주말농장에서는 다양한 작물을 재배할 수 있습니다.
            <br /> 주변 환경에 적합한 토마토, 상추, 당근 등의 작물을 재배하는
            것을 추천합니다.
          </p>
          <p>
            이러한 작물들은 특별한 관리가 필요하지 않으며,
            <br /> 주말농장에서 즐겁고 손쉽게 재배할 수 있습니다.
            <br /> 더 나은 환경을 위해 자연친화적인 방법으로 재배할 수 있는 팁도
            함께 제공됩니다.
          </p>
        </div>
        <button>바로가기</button>
      </div>
    </div>
  );
};

export default Recommendation;
