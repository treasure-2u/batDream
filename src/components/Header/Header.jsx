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
          <div className="logo">
            <img src={logoImage} alt="Logo" />
            <div className="logo-1">밭드림</div>
          </div>
        </div>
        <div className="icon-container">
          <Leaf className="icon" />
          <Link to="/FarmMain" className="header-link" id="color1">
            주말농장
          </Link>
        </div>
        <div className="icon-container">
          <Book className="icon" />
          <Link to="/PlantMain" className="header-link" id="color2">
            식물도감
          </Link>
        </div>
        <div className="icon-container">
          <BadBook className="icon" />
          <Link to="/BugMain" className="header-link" id="color3">
            유해충도감
          </Link>
        </div>
        <div className="icon-container">
          <Notice className="icon" />
          <Link to="/announcements" className="header-link" id="color4">
            공지사항
          </Link>
        </div>
      </div>
    </header>
  );
}
