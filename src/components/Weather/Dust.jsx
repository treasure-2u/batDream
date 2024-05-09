/* 미세먼지 위젯 */

import { useState } from 'react';

const DUST_API = {
  key: process.env.REACT_APP_DUST_API,
  base: 'api.odcloud.kr/api',
};

export default function Dust() {
  const [error, setError] = useState('');

  const getDust = () => {
    let now = new Date();
    let date = now.getDate();

    let url = `https://api.odcloud.kr/api/MinuDustFrcstDspthSvrc/v1/getMinuDustFrcstDspth?searchDate=${date}&serviceKey=${DUST_API.key}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => setError('ERROR'));
  };
  // 콜백주소 https://api.odcloud.kr/api/MinuDustFrcstDspthSvrc/v1/getMinuDustFrcstDspth50Over

  const DustBox = () => {};

  return (
    <div>
      <DustBox></DustBox>
      {error && <div>{error}</div>}
    </div>
  );
}
