import React, { useState, useEffect } from 'react';
// import { imgArr } from '../../utils/imgarr';
import imageUrls from '../../assets/farm/data';

const ImgCompo = ({ farm }) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        imageUrls.map((imageUrl, index) => {
          console.log(`Image ${index + 1}: ${imageUrl}`);
        });
      } catch (error) {
        setError(error);
        console.error('Fetch error:', error);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {imageUrls.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Farm Image ${index + 1}`}
          className="farm-image"
        />
      ))}
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
