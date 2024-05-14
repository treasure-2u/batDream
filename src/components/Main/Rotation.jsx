// Rotation.jsx

import React from 'react';
import farmImage from '../../assets/main/field.png'; // 이미지 import
import plantGuideImage from '../../assets/main/mainplant.png'; // 이미지 import
import pestGuideImage from '../../assets/main/pest.jpeg'; // 이미지 import
import '../../styles/Main/main.scss'; // SCSS 파일 import

const Rotation = () => {
  const images = [
    {
      src: farmImage,
      name: '주말 농장',
      description: '주말에 농사를 지을 수 있게 농장 제공',
    },
    {
      src: plantGuideImage,
      name: '식물 도감',
      description: '식물에 대한 정보를 제공',
    },
    {
      src: pestGuideImage,
      name: '유해충 도감',
      description: '유해충에 대한 정보를 제공 ',
    },
  ];

  return (
    <div>
      <h1>Introduction</h1>
      <div className="image-container">
        {images.map((image, index) => (
          <div key={index} className="image-info">
            <img src={image.src} alt={image.name} className="main-image" />
            <p className="name">{image.name}</p> {/* name 클래스 추가 */}
            <p className="description">{image.description}</p>{' '}
            {/* description 클래스 추가 */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rotation;
