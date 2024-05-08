// 전체 메인 페이지
import React from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Main/Banner';
import '../styles/Main/banner.scss';
import Pictures from '../components/Main/picture';
import '../styles/Main/pictures.scss';
import MainList from '../components/Main/mainList';
import '../styles/Main/mainList.scss';
import Dust from '../components/Weather/Dust';
import Weather from '../components/Weather/Weather';

export default function Main() {
  return (
    <>
      <Banner />
      <Weather />
      <MainList />
      <Pictures />
    </>
  );
}
