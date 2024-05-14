import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../../styles/Main/main.scss';
import picture1 from '../../assets/main/sesacimg.jpeg';
import picture2 from '../../assets/main/blueimg.jpeg';
import picture3 from '../../assets/main/conimg.jpeg';

function Pictures() {
  const images = [picture1, picture2, picture3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextIndex);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length]);

  return (
    <div className="picture-container">
      <img
        src={images[currentImageIndex]}
        alt="이미지"
        // width="1000" // 이미지 너비 조정
        // style={{ height: 'auto' }} // 높이 자동으로 조정
      />
      <div className="overlay">
        <h2>서울에 있는 주말농장</h2>
        <p className="middle-text">
          도심 속에서 자연을 경험하고 농업 활동을 <br />
          즐길 수 있는 장소입니다.
        </p>
        <p className="end-text">
          가족과 친구와 함께
          <br />
          새로운 재미를 느끼러 주말농장에 가보는건 어떨까요?
        </p>
        <Link to="/FarmMain">
          {' '}
          {/* Link to FarmMain page */}
          <button>주말농장 보러가기</button>
        </Link>
      </div>
    </div>
  );
}

export default Pictures;
