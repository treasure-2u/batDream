// import React, { useState } from 'react';

// const ImgCompo = ({ farm }) => {
//   const [isFlipped, setIsFlipped] = useState(false);

//   return (
//     <div
//       className={`farmSerchInfo ${isFlipped ? 'flipped' : ''}`}
//       onMouseEnter={() => setIsFlipped(true)}
//       onMouseLeave={() => setIsFlipped(false)}
//     >
//       <div className="farmImgInfo">
//         <div className="card">
//           <div className="front">
//             <img src={farm.imgUrl} alt={`Farm Image`} className="farm-image" />
//           </div>
//           <div className="back">
//             <div className="farmInfoContainer">
//               <p className="farmName">{farm.FARM_NAME._text}</p>
//               <p className="farmAddress">{farm.ADDRESS._text}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImgCompo;

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ImgCompo = ({ farm }) => {
  const [farmInfo, setFarmInfo] = useState(null); // 농장 정보 상태 추가
  const { farmName } = useParams(); // URL에서 파라미터 추출

  useEffect(() => {
    const fetchFarmInfo = async () => {
      try {
        const response = await fetch(
          `https://data.gm.go.kr/openapi/weekendfarm?key=${process.env.REACT_APP_FARMINFO_API_KEY}&Type=json&pIndex=1&pSize=100`,
        );
        const jsonData = await response.json();

        // URL에서 추출한 농장 이름과 일치하는 농장 정보 찾기
        const selectedFarm = jsonData.weekendfarm[1].row.find(
          (info) => info.FARM_NAME === farmName.replace('_', ' '),
        );

        setFarmInfo(selectedFarm); // 농장 정보 상태 업데이트
      } catch (error) {
        console.error('Error fetching farm info:', error);
      }
    };

    fetchFarmInfo();
  }, [farmName]); // 파라미터가 변경될 때마다 useEffect 실행

  return (
    <div className={`farmSerchInfo ${farmInfo ? 'flipped' : ''}`}>
      <div className="farmImgInfo">
        <div className="card">
          <div className="front">
            {/* 농장 정보 페이지로 이동하는 링크 */}
            <Link to={`/FarmInfo/${encodeURIComponent(farm.FARM_NAME._text)}`}>
              <img
                src={farm.imgUrl}
                alt={`Farm Image`}
                className="farm-image"
              />
            </Link>
          </div>
          <div className="back">
            <div className="farmInfoContainer">
              <p className="farmName">
                {farmInfo ? farmInfo.FARM_NAME : 'Loading...'}
              </p>
              <p className="farmAddress">
                {farmInfo ? farmInfo.ADDRESS : 'Loading...'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgCompo;
