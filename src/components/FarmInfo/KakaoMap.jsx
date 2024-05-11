// import React, { useEffect } from 'react';

// const { kakao } = window;

// const MapContainer = () => {
//   useEffect(() => {
//     const container = document.getElementById('myMap');
//     const options = {
//       center: new kakao.maps.LatLng(33.450701, 126.570667),
//       level: 3,
//     };
//     const map = new kakao.maps.Map(container, options);
//   }, []);

//   return (
//     <div
//       id="myMap"
//       style={{
//         width: '500px',
//         height: '500px',
//       }}
//     ></div>
//   );
// };

// export default MapContainer;

// MapContainer.js
// MapContainer.js
import React, { useEffect } from 'react';

const MapContainer = () => {
  useEffect(() => {
    // Kakao 지도 API 초기화 및 사용하는 코드
    const { kakao } = window;
    const apiKey = process.env.REACT_APP_KAKAOMAP_API_KEY; // 환경 변수에서 API 키를 가져옵니다.
    kakao.maps.load(() => {
      const container = document.getElementById('myMap');
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      const map = new kakao.maps.Map(container, options);
    });
  }, []);

  return <div id="myMap" style={{ width: '500px', height: '500px' }}></div>;
};

export default MapContainer;
