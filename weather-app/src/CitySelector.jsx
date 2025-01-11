import React, { useContext } from 'react';
import { WeatherContext } from './WeatherContext';

const CitySelector = () => {
  const { setCity } = useContext(WeatherContext);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="city-selector">
      <select onChange={handleCityChange}>
        <option value="Istanbul">Istanbul</option>
        <option value="Ankara">Ankara</option>
        <option value="Izmir">Izmir</option>
        {/* Diğer illeri ekleyebilirsiniz */}
      </select>
    </div>
  );
};

export default CitySelector;
