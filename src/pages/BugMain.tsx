// 해충도감 메인 페이지

import "../styles/bugmain.scss";

export default function BugMain() {
  return (
    <>
      <body>
        <header>헤더자리</header>
        <div className="bug-title">병해충 도감</div>
        <div className="line"></div>

        <div className="search-container">
          <div>병원체/작물명</div>
          <form action="">
            <input type="text" placeholder="검색어를 입력하세요." />
          </form>
        </div>

        <div>API 들어갈 자리</div>
        <footer>푸더자리</footer>
      </body>
    </>
  );
}
