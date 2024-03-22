import React from 'react';
import './Forecast.css';
import rainImage from './Assets/Rain.png'
import partlyCloudyImage from './Assets/BrokenCloud.png'
import sunImage from './Assets/Sunny.png'
import defaultIcon from './Assets/Sunny.png';


const Forecast = ({ forecastData, forecastType, setForecastType }) => {
  // Function to display daily forecast
// Adjusted function to display daily forecast based on the 5-day 3-hour forecast API structure
const renderDaily = () => {
  if (!forecastData.daily || forecastData.daily.length === 0) return <p>No daily forecast data available.</p>;

  return forecastData.daily.map((day, index) => {
    let iconUrl = defaultIcon; // Default icon
    const condition = day.weather[0].main.toLowerCase();
    const description = day.weather[0].description.toLowerCase();

    if (condition === 'clear') {
      iconUrl = sunImage;
    } else if (condition === 'rain') {
      iconUrl = rainImage;
    } else if (condition === 'clouds') {
      if (description.includes('broken')) {
        iconUrl = partlyCloudyImage;
      } else {
        iconUrl = partlyCloudyImage; // Use for generic cloudy conditions as well
      }
    }

    return (
      <div key={index} className="forecast-item">
        <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
        <img src={iconUrl} alt={day.weather[0].main} />
        <p>Temp: {day.main.temp}°C</p>
      </div>
    );
  });
};



// Function to display hourly forecast
// Adjusted function to display hourly forecasts with simplified time format
const renderHourly = () => {
  if (!forecastData.hourly || forecastData.hourly.length === 0) return <p>No hourly forecast data available.</p>;

  return forecastData.hourly.map((hour, index) => {
    let iconUrl = defaultIcon; // Default icon
    const condition = hour.weather[0].main.toLowerCase();
    const description = hour.weather[0].description.toLowerCase();

    if (condition === 'clear') {
      iconUrl = sunImage;
    } else if (condition === 'rain') {
      iconUrl = rainImage;
    } else if (condition === 'clouds') {
      if (description.includes('broken')) {
        iconUrl = partlyCloudyImage;
      } else if (description.includes('overcast')) {
        iconUrl = partlyCloudyImage; // Use for overcast conditions
      } else {
        iconUrl = partlyCloudyImage; // Assuming this is what you meant by "sunny cloud"
      }
    }

    const timeString = new Date(hour.dt * 1000).toLocaleTimeString([], { hour: 'numeric', hour12: true }).toUpperCase();

    return (
      <div key={index} className="forecast-item">
        <p>{timeString}</p> {/* Updated to use timeString with AM/PM in uppercase */}
        <img src={iconUrl} alt={hour.weather[0].main} style={{ width: '50px', height: '50px' }} />
        <p>Temp: {hour.main.temp}°C</p>
      </div>
    );
  });
};







  

  return (
    <div className="forecast-container">
      {/* Buttons to toggle between hourly and weekly forecast views */}
      <div className="forecast-tabs">
        <button 
          className={`tab ${forecastType === 'hourly' ? 'active' : ''}`}
          onClick={() => setForecastType('hourly')}
        >
          3 Hour Forecast
        </button>
        <button 
          className={`tab ${forecastType === 'weekly' ? 'active' : ''}`}
          onClick={() => setForecastType('weekly')}
        >
          5 Day Forecast
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
