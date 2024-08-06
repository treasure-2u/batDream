/* 날씨 위젯 */

import { useEffect, useState } from 'react';
import '../../styles/Main/main.scss';

// 날씨 api key
const WEATHER_API = {
  key: process.env.REACT_APP_WEATHER_API_KEY,
  base: 'https://api.openweathermap.org/data/2.5/',
};

export default function Weather() {
  const [place, setPlace] = useState('');
  const [icon, setIcon] = useState('');
  const [nowWeather, setNowWeather] = useState('');
  const [temp, setTemp] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    getCurrentLocation();
  });

  // 위치 가져오기
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getNowWeather(lat, lon);
    });
  };

  // api 불러오기
  const getNowWeather = (lat, lon) => {
    let openmap = `https://api.openweathermap.org/data/2.5/weather`
    let url = `${openmap}?lat=${lat}&lon=${lon}&appid=${WEATHER_API.key}&units=metric&lang=kr`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPlace(data.name);
        setIcon(data.weather[0].icon);
        setNowWeather(data.weather[0].description);
        setTemp(Math.round(data.main.temp)); // 소수점 이하 제거
      })
      .catch((error) => setError('ERROR'));
  };

  // 위젯 클릭시 네이버 날씨로 이동
  const goToNaverWeather = () => {
    let url = `https://weather.naver.com`;
    window.open(url, '_blank'); // 새 창에서 열기
  };

  return (
    <div className="weather-main" onClick={goToNaverWeather}>
      <div className="weather-place">{place}</div>
      <div className="weather-info">
        {icon && (
          <img
            className="weather-icon"
            src={`https://openweathermap.org/img/w/${icon}.png`}
            alt="Weather-icon"
          />
        )}
        &nbsp;
        <div className="weather">{nowWeather}</div>
      </div>
      <div className="temp-now">{temp}°C</div>
      {error && <div>Error: {error}</div>}
    </div>
  );
}
