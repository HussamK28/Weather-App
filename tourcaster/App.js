// Import React, useState, useEffect hooks, CSS, and Forecast component.
import React, { useState, useEffect } from "react";
import './App.css';
import Forecast from "./Forecast";

// Define API key and base URL for weather data.
const api = {
  key: "eea42ad1a4f21440a96577a6912ffbe4",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  // State for search input, weather data, forecast data, and type of forecast (hourly or weekly).
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({ daily: [], hourly: [] });
  const [forecastType, setForecastType] = useState('hourly');

  // Effect hook to fetch forecast data when weather data is updated (i.e., coordinates are available).
  useEffect(() => {
    if (weather.coord) {
      const url = `${api.base}onecall?lat=${weather.coord.lat}&lon=${weather.coord.lon}&exclude=minutely&units=metric&appid=${api.key}`;
      fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log("Forecast data:", data); // For debugging.
          setForecast(data);
        });
    }
  }, [weather]);
  
  // Function to fetch weather data based on search input.
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        console.log(result); // For debugging.
      });
  };

  // Component rendering, including search input, weather display, and forecast component.
  return (
    <div className="App">
      <header className="App-header">
        <h1> TourCaster </h1>
        <div>
          <input 
            type='text' 
            placeholder="Enter city/town..." 
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>
        {typeof weather.main != "undefined" && (
          <div>
            <p>{weather.name}</p>
            <p>{weather.main.temp}°</p>
            <div>
              <p>{weather.weather[0].main}</p>
            </div>
            <Forecast
              forecastData={forecast}
              forecastType={forecastType}
              setForecastType={setForecastType}
            />
            <div>
              <button onClick={() => setForecastType('hourly')}>Hourly</button>
              <button onClick={() => setForecastType('weekly')}>Weekly</button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
