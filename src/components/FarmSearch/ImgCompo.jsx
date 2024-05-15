import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ImgCompo = ({ farm }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`farmSerchInfo ${isFlipped ? 'flipped' : ''}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className="farmImgInfo">
        <div className="card">
          <div className="front">
            {/* 농장 정보 페이지로 이동하는 링크 */}
            <Link
              to={{
                pathname: `/FarmInfo/${encodeURIComponent(
                  farm.FARM_NAME._text,
                )}`,
                state: { imgUrl: farm.imgUrl }, // 이미지 URL 상태로 전달
              }}
            >
              <img
                src={farm.imgUrl}
                alt={`Farm Image`}
                className="farmSearchImage"
              />
            </Link>
          </div>
          <div className="back">
            <Link
              to={{
                pathname: `/FarmInfo/${encodeURIComponent(
                  farm.FARM_NAME._text,
                )}`,
                state: { imgUrl: farm.imgUrl }, // 이미지 URL 상태로 전달
              }}
            >
              <div className="farmInfoContainer">
                <p className="farmName">{farm.FARM_NAME._text}</p>
                <p className="farmAddress">{farm.ADDRESS._text}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgCompo;

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
