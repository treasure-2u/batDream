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
import Rotation from '../components/Main/Rotation';
import NoticeComponent from '../components/Main/PostList';
import Gallery from '../components/Main/Gallery';

export default function Main() {
  return (
    <>
      <Banner />
      {/* <Weather />
      <Dust /> */}
      <MainList />
      <Rotation />
      <Pictures />
      <Gallery />
      {/* <NoticeComponent /> */}
    </>
  );
}
