import React, { useState, useEffect } from 'react';
import '../../styles/Main/main.scss'; // SCSS 파일을 import

// 사진 import
import farm1 from '../../assets/main/gallery1.png';
import farm2 from '../../assets/main/gallery2.png';
import farm3 from '../../assets/main/gallery3.png';
import farm4 from '../../assets/main/gallery4.png';
import farm5 from '../../assets/main/gallery2.png';
import farm6 from '../../assets/main/gallery6.png';
import farm7 from '../../assets/main/gallery7.png';
import farm8 from '../../assets/main/gallery8.png';
import farm9 from '../../assets/main/gallery9.png';
import farm10 from '../../assets/main/gallery10.png';
import farm11 from '../../assets/main/gallery1.png';
import farm12 from '../../assets/main/gallery2.png';
import farm13 from '../../assets/main/gallery3.png';
import farm14 from '../../assets/main/gallery4.png';
import farm15 from '../../assets/main/gallery5.png';
import farm16 from '../../assets/main/gallery2.png';
import farm17 from '../../assets/main/gallery4.png';
import farm18 from '../../assets/main/gallery1.png';
import farm19 from '../../assets/main/gallery10.png';
import farm20 from '../../assets/main/gallery8.png';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 사진 인덱스 상태 추가

  // 농장 체험 사진 데이터
  const farmPhotos = [
    { url: farm1, description: '가족과 함께' },
    { url: farm2, description: '우리 농장' },
    { url: farm3, description: '농장 체험' },
    { url: farm4, description: '체험 학습' },
    { url: farm5, description: '가족과 함께' },
    { url: farm6, description: '우리 농장 관리' },
    { url: farm7, description: '우리 농장' },
    { url: farm8, description: '가족과 함께' },
    { url: farm9, description: '씨앗 심기' },
    { url: farm10, description: '자연 학습' },
    { url: farm11, description: '우리 농장' },
    { url: farm12, description: '직접 체험' },
    { url: farm13, description: '농장 체험' },
    { url: farm14, description: '자연과 함께' },
    { url: farm15, description: '가족과 함께' },
    { url: farm16, description: '가족과 함께' },
    { url: farm17, description: '가족과 함께' },
    { url: farm18, description: '가족과 함께' },
    { url: farm19, description: '가족과 함께' },
    { url: farm20, description: '가족과 함께' },
    // 필요에 따라 추가할 수 있습니다.
  ];

  useEffect(() => {
    // 4초마다 슬라이드하는 setInterval 설정
    const id = setInterval(() => {
      handleNext();
    }, 4000);

    // 컴포넌트가 언마운트되면 clearInterval 호출하여 메모리 누수 방지
    return () => clearInterval(id);
  }, []); // 초기 렌더링 시에만 실행

  const renderPhotos = () => {
    const startIndex = currentIndex % farmPhotos.length; // 시작 인덱스 계산
    let slicedPhotos = farmPhotos.slice(startIndex, startIndex + 5); // 5장씩 사진 슬라이싱

    // 남은 사진이 5장보다 적을 경우, 남은 사진만큼 슬라이싱
    if (slicedPhotos.length < 5) {
      slicedPhotos = [
        ...slicedPhotos,
        ...farmPhotos.slice(0, 5 - slicedPhotos.length),
      ];
    }

    return slicedPhotos.map((photo, index) => (
      <div className="photo" key={startIndex + index}>
        <img src={photo.url} alt={photo.description} />
        <p>{photo.description}</p>
      </div>
    ));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % farmPhotos.length); // 다음 사진 인덱스 설정
  };

  return (
    <div className="Gallery">
      <h1>Gallery</h1>
      <div className="gallery">{renderPhotos()}</div>
    </div>
  );
};

export default Gallery;
