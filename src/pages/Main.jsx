// 전체 메인 페이지
import React from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Main/Banner';
import Pictures from '../components/Main/picture';

import MainList from '../components/Main/mainList';

import Dust from '../components/Weather/Dust';
import Weather from '../components/Weather/Weather';
import Rotation from '../components/Main/Rotation';

import Gallery from '../components/Main/Gallery';

export default function Main() {
  return (
    <>
      <div className="main-full-container">
        <Banner />
        <div className="main-full-weather">
          <Weather />
          <Dust />
        </div>
      </div>

      <MainList />
      <Rotation />
      <Pictures />
      <Gallery />
    </>
  );
}
