import React from 'react';
import '../../styles/Plant/PlantBox.scss';

export default function PlantBox({
  title,
  order,
  svcCodeNm,
  mainChartrInfo,
  imgFileLinkOriginal,
}) {
  return (
    <div className="plant-box">
      {title && <div className="box-title"></div>}
      <div className="box-content">
        <div className="svc-code">{svcCodeNm}</div>
        <div className="main-chartr-info">특징: {mainChartrInfo}</div>
        <img
          src={imgFileLinkOriginal}
          alt={svcCodeNm}
          className="plant-image"
        />
        {/* 다른 정보들도 필요하다면 여기에 추가 */}
      </div>
    </div>
  );
}
