import React from 'react';
import '../../styles/Main/pictures.scss';
import pictureImg from '../../assets/pictures.svg';

function Pictures() {
  return (
    <div className="container">
      <img src={pictureImg} alt="이미지" width="400" />
      <div className="overlay">
        <h2>서울에 있는 주말농장</h2>
        <p className="middle-text">
          서울시에 있는 주말농장에 대한 설명
          블라블라블라블라블라블라블라블라블라블라블라.
        </p>
        <p className="end-text">
          가족과 친구와 함께 새로운 재미를 느끼러 주말농장에 가보는건 어떨까요?
        </p>
        <button>주말농장 보러가기</button>
      </div>
    </div>
  );
}

export default Pictures;
