import React from 'react';
import farmImage from '../../assets/main/field.png';
import plantGuideImage from '../../assets/main/mainplant.png';
import pestGuideImage from '../../assets/main/pest.jpeg';
import '../../styles/Main/main.scss';

const Rotation = () => {
  const images = [
    {
      src: farmImage,
      name: '주말 농장',
      description: '주말에 농사를 지을 수 있게 농장 제공',
      className: 'farm-image', // 각 이미지에 클래스 추가
    },
    {
      src: plantGuideImage,
      name: '식물 도감',
      description: '식물에 대한 정보를 제공',
      className: 'plant-guide-image', // 각 이미지에 클래스 추가
    },
    {
      src: pestGuideImage,
      name: '유해충 도감',
      description: '유해충에 대한 정보를 제공 ',
      className: 'pest-guide-image', // 각 이미지에 클래스 추가
    },
  ];

  return (
    <div>
      <div className="Introduction">Introduction</div>
      <div className="image-container">
        {images.map((image, index) => (
          <div key={index} className="image-info">
            <img
              src={image.src}
              alt={image.name}
              className={`main-image ${image.className}`} // 클래스 추가
            />
            <p className="name">{image.name}</p>
            <p className="description">{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rotation;
