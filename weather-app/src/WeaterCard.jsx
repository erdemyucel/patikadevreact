import React from 'react';

const WeatherCard = ({ day, currentDay }) => {
  const { dt, temp, weather } = day;
  const date = new Date(dt * 1000).toLocaleDateString('tr-TR', {
    weekday: 'long',
  });

  return (
    <div
      className={`weather-card ${currentDay ? 'current-day' : ''}`}
      style={{
        background: currentDay ? '#ffcc00' : '#f4f4f4',
        border: currentDay ? '2px solid #ff6600' : '1px solid #ddd',
      }}
    >
      <h3>{date}</h3>
      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}
        alt={weather[0].description}
      />
      <p>{weather[0].description}</p>
      <p>
        {Math.round(temp.max)}° / {Math.round(temp.min)}°
      </p>
    </div>
  );
};

export default WeatherCard;
