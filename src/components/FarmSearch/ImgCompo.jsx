import React, { useState, useEffect } from 'react';
import { imgArr } from '../../utils/imgarr';

const ImgCompo = ({ farm }) => {
  const [image, setImage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 무작위 이미지 선택
        const randomIndex = Math.floor(Math.random() * imgArr.length);
        const randomImage = imgArr[randomIndex];
        setImage(randomImage);
      } catch (error) {
        // 에러 발생 시 에러 상태 업데이트
        setError(error);
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);

  // 에러가 발생한 경우 에러 메시지 출력
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {image && (
        <div className="farmSearchImg">
          <img
            key={image}
            src={`/img/farmImges/farmImg${image}.jpg`}
            alt={`Image ${image}`}
            className="farm-image"
          />
        </div>
      )}
      <div className="farmSearchContent">
        {farm && (
          <div className="farmSearchContent">
            <div>
              <p>농장명: {farm.name}</p>
              <p>주소: {farm.address}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImgCompo;
