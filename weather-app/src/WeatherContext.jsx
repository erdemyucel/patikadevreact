// WeatherContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// OpenWeather API anahtarınızı buraya ekleyin
const API_KEY = 'YOUR_API_KEY'; // OpenWeather API anahtarınızı buraya ekleyin

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState('Istanbul');
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        // API isteği: 7 günlük hava durumu
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast/daily`,
          {
            params: {
              q: city,
              cnt: 7,
              units: 'metric',
              appid: API_KEY,
            },
          }
        );
        setForecast(response.data.list);
      } catch (err) {
        setError('Hava durumu verileri alınırken bir hata oluştu.');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <WeatherContext.Provider value={{ forecast, city, setCity, loading, error }}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherProvider };
