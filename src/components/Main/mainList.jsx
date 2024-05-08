import React from 'react';
import '../../styles/Main/mainList.scss';

const Recommendation = () => {
  return (
    <div>
      {/* 밭드림 정보 */}
      <div>
        <h2>밭드림</h2>
        <p>
          밭드림은 '밭'에서 꿈을 '드림(Dream)'이라는 의미로, 주말농장에서 자신의
          꿈을 키우는 것을 의미합니다. 농사 지을 밭과 꿈을 이루는 드림의 말장난
          + 주말농장이 밭을 빌려주는 형식이므로 밭을 준다(밭드림)는 직관적인
          표현 사용.
        </p>
      </div>

      {/* 사진 */}
      <div>{/* 여기에 사진을 넣으세요 */}</div>

      {/* 추천작물과 설명 */}
      <div>
        <h2>추천작물</h2>
        <p>추천작물에 대한 설명을 여기에 추가하세요.</p>
      </div>

      {/* 버튼 */}
      <div>{/* 여기에 버튼을 추가하세요 */}</div>
    </div>
  );
};

export default Recommendation;
