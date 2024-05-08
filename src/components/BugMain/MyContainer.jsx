// MyContainer.js
import React from 'react';

function MyContainer(props) {
  return (
    <div>
      {/* title prop 값에 따라 제목 행 렌더링 여부 결정 */}
      {props.title && (
        <div className="api-container-title">
          <div className="api-item">순번</div>
          <div className="api-item">작물</div>
          <div className="api-item">이름</div>
          <div className="api-item">영문영</div>
          <div className="api-item">대표사진</div>
        </div>
      )}

      {/* 데이터 행 */}
      <div className="api-container">
        <div className="api-item">{props.order}</div>
        <div className="api-item">{props.crop}</div>
        <div className="api-item">{props.name}</div>
        <div className="api-item">{props.englishName}</div>
        <div className="api-item">{props.mainImage}</div>
      </div>
    </div>
  );
}

export default MyContainer;
