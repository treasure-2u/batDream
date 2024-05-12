// 해충도감 상세 페이지

import React from 'react';
import '../styles/BugInfo/BugInfo.scss';
import InfoComponent from './../components/BugInfo/InfoComponent';

export default function BugInfo() {
  return (
    <>
      <div className="bug-title">병원체</div>
      <div className="line"></div>
      <InfoComponent />
    </>
  );
}
