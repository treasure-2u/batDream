import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/header/logo.png';
import '../../styles/Header/Header.scss';

import { ReactComponent as Leaf } from '../../assets/header/leafpg.svg';
import { ReactComponent as Book } from '../../assets/header/bookpg.svg';
import { ReactComponent as BadBook } from '../../assets/header/bad-bookpg.svg';
import { ReactComponent as Notice } from '../../assets/header/noticepg.svg';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="main-logo">
          <Link to="/" style={{ textDecoration: 'none' }}>
            {/* 로고를 클릭했을 때 이동할 경로 */}
            <div className="logo">
              <img src={logoImage} alt="Logo" />
              <div className="logo-1">밭드림</div>
            </div>
          </Link>
        </div>
        <div className="icon-container">
          <Link to="/FarmSearch" className="header-link" id="color1">
            <Leaf className="icon" />
          </Link>
          <Link to="/FarmSearch" className="header-link" id="color1">
            주말농장
          </Link>
        </div>
        <div className="icon-container">
          <Link to="/PlantMain" className="header-link" id="color2">
            <Book className="icon" />
          </Link>
          <Link to="/PlantMain" className="header-link" id="color2">
            식물도감
          </Link>
        </div>
        <div className="icon-container">
          <Link to="/BugMain" className="header-link" id="color3">
            <BadBook className="icon" />
          </Link>
          <Link to="/BugMain" className="header-link" id="color3">
            유해충도감
          </Link>
        </div>
        <div className="icon-container">
          <Link to="/FarmGuide" className="header-link" id="color4">
            <Notice className="icon" />
          </Link>
          <Link to="/FarmGuide" className="header-link" id="color4">
            팜가이드
          </Link>
        </div>
      </div>
    </header>
  );
}
