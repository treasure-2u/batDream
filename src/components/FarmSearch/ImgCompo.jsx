import React, { useState } from 'react';

const ImgCompo = ({ farm }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`farmSerchInfo ${isFlipped ? 'flipped' : ''}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className="farmImgInfo">
        <div className="card">
          <div className="front">
            <img src={farm.imgUrl} alt={`Farm Image`} className="farm-image" />
          </div>
          <div className="back">
            <div className="farmInfoContainer">
              <p className="farmName">{farm.FARM_NAME._text}</p>
              <p className="farmAddress">{farm.ADDRESS._text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgCompo;
