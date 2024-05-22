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
      className: 'rotation__image--farm',
      link: '/FarmSearch',
    },
    {
      src: plantGuideImage,
      name: '식물 도감',
      description: '식물에 대한 정보를 제공',
      className: 'rotation__image--plant-guide',
      link: '/PlantMain',
    },
    {
      src: pestGuideImage,
      name: '유해충 도감',
      description: '유해충에 대한 정보를 제공',
      className: 'rotation__image--pest-guide',
      link: '/BugMain',
    },
  ];

  return (
    <div className="rotation">
      <h1 className="rotation__title">Introduction</h1>
      <div className="rotation__images">
        {images.map((image, index) => (
          <div key={index} className="rotation__image-info">
            <a href={image.link} className="rotation__link">
              <img
                src={image.src}
                alt={image.name}
                className={`rotation__image ${image.className}`}
              />
            </a>
            <p className="rotation__name">{image.name}</p>
            <p className="rotation__description">{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rotation;
