import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ImgCompo = ({ farm }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(userAgent));
  }, []);

  const handleToggleInfo = () => {
    if (!isMobile) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div
      className={`farmSerchInfo ${isFlipped ? 'flipped' : ''}`}
      onMouseEnter={handleToggleInfo}
      onMouseLeave={handleToggleInfo}
    >
      <div className="farmImgInfo">
        <div className="card">
          <div className="front">
            <Link
              to={{
                pathname: `/FarmInfo/${encodeURIComponent(
                  farm.FARM_NAME._text,
                )}`,
                state: { imgUrl: farm.imgUrl },
              }}
            >
              <img
                src={farm.imgUrl}
                alt={`${farm.FARM_NAME._text}`}
                className="farmSearchImage"
              />
            </Link>
          </div>
          <div className="back">
            <Link
              to={{
                pathname: `/FarmInfo/${encodeURIComponent(
                  farm.FARM_NAME._text,
                )}`,
                state: { imgUrl: farm.imgUrl },
              }}
            >
              <div className="farmInfoContainer">
                <p className="farmName">{farm.FARM_NAME._text}</p>
                <p className="farmAddress">{farm.ADDRESS._text}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* 모바일*/}
      <Link
        to={{
          pathname: `/FarmInfo/${encodeURIComponent(farm.FARM_NAME._text)}`,
          state: { imgUrl: farm.imgUrl },
        }}
      >
        <div className="back-M">
          {isMobile && (
            <div className="farmInfoContainer-M">
              <p className="farmName-M">{farm.FARM_NAME._text}</p>
              <p className="farmAddress-M">{farm.ADDRESS._text}</p>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ImgCompo;
