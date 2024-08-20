import React from 'react';
import Banner from '../components/Main/Banner';
import Pictures from '../components/Main/picture';
import MainList from '../components/Main/mainList';
import Dust from '../components/Weather/Dust';
import Weather from '../components/Weather/Weather';
import Rotation from '../components/Main/Rotation';
import Gallery from '../components/Main/Gallery';
import Top from '../assets/banner-main.png';

// Arrow 컴포넌트 정의
const Arrow = () => {
  const styles = {
    arrowContainer: {
      position: 'absolute',
      top: '60vh',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    arrow: {
      width: 0,
      height: 0,
      borderLeft: '8px solid transparent',
      borderRight: '8px solid transparent',
      borderTop: '8px solid lightgray',
      marginTop: '-5px',
      animation: 'move 1s ease-in-out infinite',
    },
    firstArrow: {
      animationDelay: '0.2s',
    },
    secondArrow: {
      animationDelay: '0.7s',
    },
  };

  return (
    <div style={styles.arrowContainer}>
      <span
        className="moving-arrow"
        style={{ ...styles.arrow, ...styles.firstArrow }}
      ></span>
      <span
        className="moving-arrow"
        style={{ ...styles.arrow, ...styles.secondArrow }}
      ></span>
    </div>
  );
};

// Keyframes for animation
const styleSheet = document.styleSheets[0];
const keyframes = `
  @keyframes move {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(10px);
      opacity: 0;
    }
  }
`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

// main.jsx
export default function Main() {
  return (
    <>
      <div className="top-banner">
        <img src={Top} alt="Top Banner" />
        <Arrow />
      </div>
      <div className="main-full-container">
        <Banner />
        <div className="main-full-weather">
          <Weather />
          <Dust />
        </div>
      </div>

      <MainList />
      <Rotation />
      <Pictures />
      <Gallery />
    </>
  );
}
