import React, { useContext } from 'react';
import { WeatherProvider, WeatherContext } from './WeatherContext';
import WeatherCard from './WeatherCard';
import CitySelector from './CitySelector';

const App = () => {
  const { forecast, city, loading, error } = useContext(WeatherContext);

  return (
    <WeatherProvider>
      <div className="app">
        <h1>Hava Durumu Uygulaması</h1>
        <CitySelector />
        {loading && <p>Yükleniyor...</p>}
        {error && <p>{error}</p>}
        <div className="weather-cards">
          {forecast.map((day, index) => {
            const isCurrentDay = index === 0;
            return <WeatherCard key={index} day={day} currentDay={isCurrentDay} />;
          })}
        </div>
      </div>
    </WeatherProvider>
  );
};

export default App;
