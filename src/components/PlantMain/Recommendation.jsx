// Recommendation.jsx
import React, { useState } from 'react';

const Recommendation = ({ recommendedPlant }) => {
  const [isShown, setIsShown] = useState(false);

  const toggleRecommendation = () => {
    setIsShown(!isShown);
  };

  return (
    <div>
      <button onClick={toggleRecommendation}>식물 추천 받기</button>
      {isShown && (
        <div>
          추천 식물: {recommendedPlant.svcCodeNm}
          {/* 이외에도 필요한 식물 정보를 여기에 표시할 수 있습니다. */}
        </div>
      )}
    </div>
  );
};

export default Recommendation;
