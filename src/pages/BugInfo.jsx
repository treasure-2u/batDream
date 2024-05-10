// 해충도감 상세 페이지

import React from 'react';
import NavbarDarkExample from '../components/BugMain/bootstrap';
import '../styles/BugInfo/BugInfo.scss';
export default function BugInfo() {
  return (
    <>
      <div className="bug-title">병원체</div>
      <div className="BugInfo">
        <div className="line"></div>
        <div className="bootstrap-container">
          <div>병해충 정보</div>
          <NavbarDarkExample />
        </div>
        <div className="Phytophthora-page">벌레</div>
      </div>
    </>
  );
}
