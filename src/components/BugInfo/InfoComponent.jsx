// InfoComponent.js
import React from 'react';
import './InfoComponent.scss'; // Sass 파일을 import합니다.
import NavbarDarkExample from '../BugMain/bootstrap';

export default function InfoComponent() {
  return (
    <>
      <div className="main-container">
        <div className="Kategorie">
          <div className="Kategorie-title">병해충 정보</div>
          <NavbarDarkExample />
        </div>
        <div className="main-main">
          <div className="InfoComponent">
            <div>🌱병해충 도감정보🌱</div>
          </div>
          <div className="info">
            <div className="info-title"> 🎈 기본정보</div>
            <div className="info-container">
              <div className="info-pic">
                <img
                  src="https://ncpms.rda.go.kr/npmsAPI/thumbnailViewer2.mo?uploadSpec=npms&uploadSubDirectory=/photo/sickns/&imageFileName=53a6b017d54d3d88dc69cef7e4f4e6d355791627a617f22c32b3afbc94bb6069f91aed1f1394cacfe17430590261ab48"
                  alt="병원체"
                />
              </div>
              <div className="info-name">
                <p>속명: Phytophthora </p>
                <p>종명: capsici </p>
                <p>작물: 가지 </p>
                <p>병명: 갈색부패병 </p>
              </div>
            </div>
          </div>
          <div className="info-detail">
            <div className="info-detail-title">🎈 일반정보</div>
            <div className="info-deatil-main">
              <p>🎈 특징</p>
              <p>
                P. capsici는 형태적으로 그룹 Ⅱ에 속한다. 유주자낭은 돌출이
                뚜렷하고 방추형, 레몬형, 난형, 둥근 타원형 등이 있고 끝이 갈라진
                형태 등 다양하다. 35~138㎛ 정도의 긴 자루 부착되어 있고 탈락성이
                매우 높다. 한천배양기 및 물속에서 형성되고 돌기가 2개이거나
                유주자낭병에 측착하는 경우도 있다. 크기는 33~66×18~39㎛ (평균:
                45.5×29.6㎛)이다. 유주자낭병은 뚜렷하게 분지 되어 있고 형태는
                우산형, 부채꼴 등으로 불규칙하다.
                <br /> ? 자웅이주균으로 단 균주가 A1과 A2가 고르게 분포되 있다.
                장난기는 표면이 매끈하고 색소를 생성한다.
                크기는23~50㎛(평균:27.5㎛)이다. 난포자는 대부분 충만형으로
                크기는 24~35㎛(평균:27.5㎛)이다. 장정기의 부착형태는 저착형이고
                구형으로 다소 작은 편이다. 후막포자는 소량 형성한다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
