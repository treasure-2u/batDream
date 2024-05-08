// 전체 메인 페이지
import React from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Main/Banner';
import '../styles/Main/banner.scss';
import Pictures from '../components/Main/picture';
import '../styles/Main/pictures.scss';
import MainList from '../components/Main/mainList';

export default function Main() {
  return (
    <>
      {/* <Header /> */}
      <Banner />
      {/* <MainList />
      <Pictures /> */}
    </>
  );
}
