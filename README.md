<div align=left>

# '밭드림 | BatDream' 사이트 제작

<br>
<p align=center><img src="https://github.com/treasure-2u/batDream/blob/main/public/logo-readme.png" alt="logo" style="width: 200px"></p>
SeSAC 강동 3기 - 3차 팀 프로젝트에서 제작한 주말농장 초보자들을 위한 정보 제공 사이트 '밭드림'입니다.

<br>
<br>

## 💻 배포 주소

https://batdream.vercel.app/

https://github.com/treasure-2u/batDream/
<br>
<br>

## 👨‍🏫 프로젝트 소개

- **기획 배경** :

  (1) 웰빙과 비건푸드 등 친환경적이고 건강한 삶에 대한 관심이 많은 시대

  (2) 내 가족이 먹을 농작물을 주말농장에서 직접 키우고 수확하는 인구 증가

  → 그러나 관련 지식이 없으면 주말농장도 접근이 어렵다는 점에서 착안, 초보 농부들을 위한 정보 제공 사이트 '밭드림' 제작

- **개발기간 및 과정**

  - 2024.04.26(금) ~ 05.02(목) : 기획

  - 2024.05.03(금) ~ 05.16(목) : 개발(Agile Scrum)

  - 2024.05.17(금) : 발표 및 평가

<br>

## 🛠 기술 스택

- **Frontend**

  ![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
  ![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white)
  ![SASS](https://img.shields.io/badge/SASS-CC6699?style=for-the-badge&logo=Sass&logoColor=white)
  ![Babel](https://img.shields.io/badge/babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=black)
  ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

- **Version Control**

  ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
  ![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

- **Development Tool**

  ![VScode](https://img.shields.io/badge/Visual_Studio_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
  ![eslint](https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

- **Design Tool**

  ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

- **Deploy Platform**

  ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

- **Scrum**

  ![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white)
  ![discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)
  ![Kakaotalk](https://img.shields.io/badge/KakaoTalk-FFCD00?style=for-the-badge&logo=kakaotalk&logoColor=black)
  ![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white)
  (+ 대면 회의)

<br>

## 👩‍💻 개발자 소개 & 업무분담

- **이유진** [@treasure-2u](https://github.com/treasure-2u/) : `팀장` Favicon, Footer, 주말농장 상세정보

- **오유리** [@oooohri](https://github.com/oooohri) : 주말농장 검색 페이지

- **조유진** [@yjinn0813](http://github.com/yjinn0813) : 날씨 위젯, 미세먼지 위젯, Not Found 페이지

- **이윤호** [@Leeyoonho0310](http://github.com/Leeyoonho0310) : 식물도감, 주말농장 가이드

- **윤경수** [@yoonkyoungsoo](https://github.com/yoonkyoungsoo) : 병/해충도감 메인 & 상세

- **손수희** [@tngml](https://github.com/tngml) : Header, 메인 페이지

<br>

## 🌱 주요 기능

### Main Page

- Navigation bar, image hover event

- 농장 상세정보 검색

- Gallery section - photo rotation

### 주말농장

- **주말농장 메인**

  - 주말농장 리스트 이미지 hover event

  - 농장 검색 (검색 결과 실시간 반영하여 출력, 지역 필터링)

  - pagenation으로 여러 주말농장 데이터 출력

- **주말농장 정보**

  - '광명시 주말농장 API'를 이용해 농장의 주소, 운영일 등 정보 제공

  - 주말농장 신청 페이지로 바로 이동 가능

- **팜가이드**: 주말농장 초보자에게 이용 에티켓 및 퀴즈 제공

### 식물도감

- '농사로'에서 제공하는 '농작물 품종정보 API'를 이용하여 다양한 농작물의 특징 및 생육/재배정보 제공

- 농작물 검색, 가나다순 정렬 기능 제공

### 병/해충도감

- 각 농작물별 대표적인 병충해 관련 정보 제공

- 카테고리 필터링, 검색 기능 제공

### 날씨, 미세먼지 위젯

- **날씨 위젯** : Open Weather Map API를 이용하여 현재 위치를 기준으로 한 날씨 정보 제공

  [날씨 위젯 기술 상세 설명](https://hjinn0813.tistory.com/59)

- **미세먼지 위젯** : '서울 열린데이터 광장'에서 제공하는 '서울시 권역별 실시간 대기환경 현황 API'를 이용하여 가장 최근에 측정한 대기환경 정보 제공 (서울 강동구 기준)

  [미세먼지 위젯 기술 상세 설명](https://hjinn0813.tistory.com/60)

  <br>

## 📌 API

- **광명시 주말농장 API**

  - 광명시의 주말농장 현황 정보 제공 (농장명, 주소, 규모, 운영일 등)

- **농사로 - 농작물 품종정보 API**

  - 다양한 농작물의 특징 및 생육/재배정보 제공

- **Open Weather Map API**

  - 웹 브라우저의 geolocation API를 이용하여 현재 위치 정보 가져오기

  - 가져온 현재 위치를 기준으로 하는 날씨 정보 제공

  - 웹에서 클릭 시 '네이버 날씨' 페이지로 이동

- **서울 열린데이터 광장 - 서울시 권역별 실시간 대기환경 현황 API**

  - 서울시 25개 자치구의 데이터를 모두 불러와서 강동구의 정보만 추출 및 출력

  - 미세먼지 결과(좋음, 보통, 나쁨)에 따라 다른 디자인 설정

  - 웹에서 클릭 시 '네이버 날씨'의 미세먼지 페이지로 이동  
    <br>

## 📍 User Flow

<p align=center><img src="https://github.com/treasure-2u/batDream/blob/main/public/userflow.png" width="800"></p>

<br>

## 📁 프로젝트 구조

```bash
📦batDream
 ┣ 📂public
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜index.html
 ┃ ┣ 📜logo-readme.png
 ┃ ┣ 📜logo.png
 ┃ ┣ 📜logo2.png
 ┃ ┣ 📜manifest.json
 ┃ ┗ 📜robots.txt
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📂farm
 ┃ ┃ ┃ ┗ 📜data.js
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂BugInfo
 ┃ ┃ ┃ ┗ 📜InfoComponent.jsx
 ┃ ┃ ┣ 📂BugMain
 ┃ ┃ ┃ ┣ 📜bootstrap.jsx
 ┃ ┃ ┃ ┣ 📜BugData.json
 ┃ ┃ ┃ ┗ 📜MyContainer.jsx
 ┃ ┃ ┣ 📂FarmGuide
 ┃ ┃ ┃ ┣ 📜FarmGuideInfo.jsx
 ┃ ┃ ┃ ┗ 📜QuizGame.jsx
 ┃ ┃ ┣ 📂FarmInfo
 ┃ ┃ ┃ ┣ 📜Copy.jsx
 ┃ ┃ ┃ ┣ 📜FarmInfoContainer.jsx
 ┃ ┃ ┃ ┗ 📜FarmList.jsx
 ┃ ┃ ┣ 📂FarmSearch
 ┃ ┃ ┃ ┣ 📜AreaFilterCompo.jsx
 ┃ ┃ ┃ ┣ 📜ImgCompo.jsx
 ┃ ┃ ┃ ┗ 📜NameFilterCompo.jsx
 ┃ ┃ ┣ 📂Footer
 ┃ ┃ ┃ ┣ 📜Footer.jsx
 ┃ ┃ ┃ ┗ 📜Footer420.jsx
 ┃ ┃ ┣ 📂Header
 ┃ ┃ ┃ ┗ 📜Header.jsx
 ┃ ┃ ┣ 📂Main
 ┃ ┃ ┃ ┣ 📜Banner.jsx
 ┃ ┃ ┃ ┣ 📜Gallery.jsx
 ┃ ┃ ┃ ┣ 📜mainList.jsx
 ┃ ┃ ┃ ┣ 📜picture.jsx
 ┃ ┃ ┃ ┗ 📜Rotation.jsx
 ┃ ┃ ┣ 📂PlantMain
 ┃ ┃ ┃ ┣ 📜DropDown.jsx
 ┃ ┃ ┃ ┣ 📜PageNation.jsx
 ┃ ┃ ┃ ┣ 📜PlantBox.jsx
 ┃ ┃ ┃ ┣ 📜Recommendation.jsx
 ┃ ┃ ┃ ┗ 📜SortButton.jsx
 ┃ ┃ ┗ 📂Weather
 ┃ ┃ ┃ ┣ 📜Dust.jsx
 ┃ ┃ ┃ ┗ 📜Weather.jsx
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜BugInfo.jsx
 ┃ ┃ ┣ 📜BugMain.jsx
 ┃ ┃ ┣ 📜FarmGuide.jsx
 ┃ ┃ ┣ 📜FarmInfo.jsx
 ┃ ┃ ┣ 📜FarmSearch.jsx
 ┃ ┃ ┣ 📜Main.jsx
 ┃ ┃ ┣ 📜NotFound.jsx
 ┃ ┃ ┗ 📜PlantMain.jsx
 ┃ ┣ 📂styles
 ┃ ┃ ┣ 📂BugInfo
 ┃ ┃ ┃ ┣ 📜BugInfo.scss
 ┃ ┃ ┃ ┗ 📜InfoComponent.scss
 ┃ ┃ ┣ 📂BugMain
 ┃ ┃ ┃ ┗ 📜bugmain.scss
 ┃ ┃ ┣ 📂FarmInfo
 ┃ ┃ ┃ ┗ 📜farmInfo.scss
 ┃ ┃ ┣ 📂FarmSearch
 ┃ ┃ ┃ ┣ 📜FarmGuideInfo.scss
 ┃ ┃ ┃ ┗ 📜FarmSearch.scss
 ┃ ┃ ┣ 📂Footer
 ┃ ┃ ┃ ┣ 📜footer.scss
 ┃ ┃ ┃ ┗ 📜Popup.scss
 ┃ ┃ ┣ 📂Header
 ┃ ┃ ┃ ┗ 📜Header.scss
 ┃ ┃ ┣ 📂Main
 ┃ ┃ ┃ ┗ 📜main.scss
 ┃ ┃ ┣ 📂Plant
 ┃ ┃ ┃ ┣ 📜Pagenation.scss
 ┃ ┃ ┃ ┣ 📜PlantBox.scss
 ┃ ┃ ┃ ┗ 📜PlantMain.scss
 ┃ ┃ ┣ 📜NotFound.scss
 ┃ ┃ ┗ 📜root.scss
 ┃ ┣ 📜App.js
 ┃ ┣ 📜index.js
 ┃ ┗ 📜setupProxy.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜README.md
```

---

### 📢 해당 사이트 제작에 사용한 모든 이미지의 저작권은 소유자에게 있으며, 학습용으로 사용했음을 알립니다.
