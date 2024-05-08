/* 날씨 위젯 */

import { useEffect, useState } from 'react';
import '../../styles/weather/Weather.scss';

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
  }, []);

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
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API.key}&units=metric&lang=kr`;
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

  return (
    <div className="weather-main">
      <div className="weather-place">{place}</div>
      {icon && (
        <img
          src={`http://openweathermap.org/img/w/${icon}.png`}
          alt="Weather-icon"
        />
      )}
      <div className="weather">{nowWeather}</div>
      <div className="temperature">{temp}°C</div>
      {error && <div>Error: {error}</div>}
    </div>
  );
}
