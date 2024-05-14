import { useState, useEffect } from 'react';

const WeekendFarmInfo = () => {
  const [farmInfo, setFarmInfo] = useState([]); // 주말농장 정보를 담을 상태와 설정 함수를 정의

  useEffect(() => {
    // console.log(farmInfo.length != 0);

    const fetchFarmInfo = async () => {
      try {
        const response = await fetch(
          `https://data.gm.go.kr/openapi/weekendfarm?key=${process.env.REACT_APP_FARMINFO_API_KEY}&Type=json&pIndex=1&pSize=100`, // API 주소에 API 키를 포함하여 요청합니다.
        );
        const jsonData = await response.json(); // API 응답을 텍스트로 변환
        console.log(jsonData.weekendfarm[1].row);
        setFarmInfo(jsonData.weekendfarm[1].row); // 변환된 JSON 데이터를 상태에 저장
      } catch (error) {
        console.error('Error fetching farm info:', error); // 오류가 발생한 경우 콘솔에 오류 메시지를 출력
      }
    };

    fetchFarmInfo(); // 주말농장 정보를 가져오는 함수를 호출
  }, []); // API 키가 변경될 때마다 useEffect가 다시 실행되도록 설정

  return (
    <div>
      <h2>주말농장 정보</h2>
      {farmInfo.length !== 0 ? ( // farmInfo가 존재하는 경우에만 정보를 표시
        <ul>
          {farmInfo.map((info, index) => (
            <li key={index}>
              <p>주말농장명: {info.FARM_NAME}</p>
              <p>주소: {info.ADDRESS}</p>
              <p>규모: {info.SCALE}</p>
              <p>운영 시작일: {info.USE_START_DATE}</p>
              <p>운영 종료일: {info.USE_END_DATE}</p>
              <p>텃밭면적(m2): {info.VEGE_AREA}</p>
              <p>참고사항: {info.ETC}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p> // 데이터가 로딩 중인 경우 로딩중 메시지 표시
      )}
    </div>
  );
};

export default WeekendFarmInfo;
