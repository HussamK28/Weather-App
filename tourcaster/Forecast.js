import React from 'react';
import './Forecast.css';

const Forecast = ({ forecastData, forecastType, setForecastType }) => {
  // Function to display daily forecast
  const renderDaily = () => {
    // Display message if no daily data
    if (!forecastData.daily) return <p>No daily forecast data available.</p>;

    // Map over daily data to display each day's forecast
    return forecastData.daily.map((day, index) => (
      <div key={index} className="forecast-item">
        <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
        <p>Temp: {day.temp.day}°C</p>
        <p>{day.weather[0].description}</p>
      </div>
    ));
  };

  // Function to display hourly forecast
  const renderHourly = () => {
    // Display message if no hourly data
    if (!forecastData.hourly) return <p>No hourly forecast data available.</p>;

    // Map over hourly data to display each hour's forecast
    return forecastData.hourly.map((hour, index) => (
      <div key={index} className="forecast-item">
        <p>{new Date(hour.dt * 1000).toLocaleTimeString()}</p>
        <p>Temp: {hour.temp}°C</p>
        <p>{hour.weather[0].description}</p>
      </div>
    ));
  };

  return (
    <div className="forecast-container">
      {/* Buttons to toggle between hourly and weekly forecast views */}
      <div className="forecast-tabs">
        <button 
          className={`tab ${forecastType === 'hourly' ? 'active' : ''}`}
          onClick={() => setForecastType('hourly')}
        >
          Hourly Forecast
        </button>
        <button 
          className={`tab ${forecastType === 'weekly' ? 'active' : ''}`}
          onClick={() => setForecastType('weekly')}
        >
          Weekly Forecast
        </button>
      </div>
      {/* Conditionally render forecast based on selected forecast type */}
      <div className="forecast-display">
        {forecastType === 'hourly' ? renderHourly() : renderDaily()}
      </div>
    </div>
  );
};

export default Forecast;
