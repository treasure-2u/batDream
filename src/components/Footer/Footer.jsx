import React from 'react';
import Copy from '../FarmInfo/Copy'; // Copy 컴포넌트 가져오기
import '../../styles/Footer/footer.scss'; // 일반적인 CSS 파일 가져오기
import logoImage from '../../assets/header/logo.png';

const Footer = () => {
  const handleClick = () => {
    alert(
      '밭드림 고객센터 안내\n운영시간 : 평일 9:00am ~6:00pm\n1번) 비밀번호, 보호조치, 이용제한 등 계정 관련\n2번) 추가 콘텐츠 제보\n3번) 주말농장 신청, 지역 농장정보\n4번) 권리보호 센터\n5번) 그 외 서비스',
    );
  };

  return (
    <footer className="footer">
      <div className="contents" style={{ position: 'relative' }}>
        <div style={{ display: 'inline-block' }}>
          <div className="footer-logo">
            <img src={logoImage} alt="Logo" />
            <div className="logo-2">BAT Dream</div>
          </div>
          <div>
            <div className="title">(주)밭드림</div>
            <div className="title">대표이사: 이유진</div>
            <div className="title">
              <Copy text="서울시 강동구 새싹대로 415 밭드림빌딩">
                주소: 서울시 강동구 새싹대로 415 밭드림빌딩
              </Copy>
            </div>
          </div>
          <div>
            <div className="title">
              <Copy text="02-1234-5678">FAX: 02-1234-5678</Copy>
            </div>
            <div className="title">
              <Copy text="123-45-67890">사업자등록번호: 123-45-67890</Copy>
            </div>
          </div>
          <div>
            <div className="title">
              <Copy text="batdream@batdream.or.kr">
                E-mail: batdream@batdream.or.kr
              </Copy>
            </div>
            <div className="title" id="popup" onClick={handleClick}>
              대표번호: 1588-0001 (상세보기)
            </div>
          </div>
          <br />
          <div className="title">© BATDREAM Corp.</div>
        </div>
        <div className="bat-text">
          <div className="title-2">Bountiful harvest, fields wide,</div>
          <div className="title-2">Abundant joy, where dreams reside.</div>
          <div className="title-2">Thriving farm, nature's pride.</div>
          <br />
          <div className="title-2">풍부한 수확, 넓은 들판,</div>
          <div className="title-2">풍요로운 기쁨, 꿈이 있는 곳.</div>
          <div className="title-2">번영하는 농장, 자연의 자랑.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
