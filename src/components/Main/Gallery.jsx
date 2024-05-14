import React, { useState, useEffect } from 'react';
import '../../styles/Main/gallery.scss'; // SCSS 파일을 import

// 사진 import
import farm1 from '../../assets/main/gallery1.png';
import farm2 from '../../assets/main/gallery2.png';
import farm3 from '../../assets/main/gallery3.png';
import farm4 from '../../assets/main/gallery4.png';
import farm5 from '../../assets/main/gallery5.png';
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

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 사진 인덱스 상태 추가
  const [slideDirection, setSlideDirection] = useState(''); // 슬라이드 방향 상태 추가

  // 농장 체험 사진 데이터
  const farmPhotos = [
    { url: farm1, description: '작물 재배' },
    { url: farm2, description: '가축 사육' },
    { url: farm3, description: '자연 경관' },
    { url: farm4, description: '자연 경관' },
    { url: farm5, description: '자연 경관' },
    { url: farm6, description: '자연 경관' },
    { url: farm7, description: '자연 경관' },
    { url: farm8, description: '자연 경관' },
    { url: farm9, description: '자연 경관' },
    { url: farm10, description: '자연 경관' },
    { url: farm11, description: '자연 경관' },
    { url: farm12, description: '자연 경관' },
    { url: farm13, description: '자연 경관' },
    { url: farm14, description: '자연 경관' },
    { url: farm15, description: '자연 경관' },
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
    const slicedPhotos = farmPhotos.slice(startIndex, startIndex + 5); // 5장씩 사진 슬라이싱

    return slicedPhotos.map((photo, index) => (
      <div
        className={`photo ${
          slideDirection === 'left'
            ? 'slide-out'
            : slideDirection === 'right'
            ? 'slide-in'
            : ''
        }`}
        key={startIndex + index}
      >
        <img src={photo.url} alt={photo.description} />
        <p>{photo.description}</p>
      </div>
    ));
  };

  const handleNext = () => {
    setSlideDirection('left'); // 왼쪽으로 슬라이드
    setTimeout(() => {
      setCurrentIndex((prevIndex) => prevIndex + 5); // 다음 사진들 보여주기
      setSlideDirection('right'); // 오른쪽에서 슬라이드 인
    }, 200); // 애니메이션 시간(0.5초) 후에 실행
  };

  return (
    <div className="Gallery">
      <h1>Gallery</h1>
      <div className="gallery">{renderPhotos()}</div>
    </div>
  );
};

export default Gallery;
