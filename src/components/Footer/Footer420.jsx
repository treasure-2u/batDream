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
      <div className="contents">
        <div className="footer-logo">
          <img src={logoImage} alt="Logo" />
          <div className="logo-2">BAT Dream</div>
        </div>
        <div className="title">주소: 서울시 강동구 새싹대로 415 밭드림빌딩</div>
        <div className="title" id="popup" onClick={handleClick}>
          대표 번호: 1588-0001 (상세보기)
        </div>
        <div className="title">E-mail: batdream@batdream.or.kr</div>
        {/* Corp. == 주식회사 */}
        <div className="title">© BATDREAM Corp.</div>
        {/* All rights reserved. == 모든 권리 보유 */}
        {/* <div className="title">© BATDREAM. All rights reserved.</div> */}
      </div>
    </footer>
  );
};

export default Footer;
