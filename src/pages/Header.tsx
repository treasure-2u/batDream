// Header.tsx

import React from "react";
import "../styles/Header.scss";
// import LogoImg from "../../public/logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">주말농장</a>
            </li>
            <li>
              <a href="#">식물도감</a>
            </li>
            <li>
              <a href="#">유해충도감</a>
            </li>
            <li>
              <a href="#">공지사항</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
