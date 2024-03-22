import React,{useEffect, useState} from 'react';
import './widget.css';
import { Link } from "react-router-dom";

import axios from 'axios';
import {ReactComponent as MoonSvg} from './assets/moon.svg';
import {ReactComponent as CloudSvg} from './assets/cloud.svg';
import {ReactComponent as SunSvg} from './assets/sun.svg';
import {ReactComponent as SunSetSvg} from './assets/sunset.svg';
import {ReactComponent as PollutionSvg} from './assets/pollution.svg';
import {ReactComponent as RainfallSvg} from './assets/rainfall.svg';
import {ReactComponent as UVSvg} from './assets/uv.svg';
import {ReactComponent as PressureSvg} from './assets/pressure.svg';
import {ReactComponent as FogSvg} from './assets/foggy.svg';

// Function component for otherWidget
export const otherWidget = ({query, text}) =>{
  <div className='weatherWidget'>
        <div>{text}</div>
        <div className='temperature'>{query}°C</div>
  </div>
}

// Main Widgets component
function Widgets({location}) {

  // State for weather data
  const [weatherData, setWeatherData] = useState(null)

  // Fetching weather data on component mount and whenever location changes
  useEffect(()=>{
    if(location.length){
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8c22d456354c5a932288a200779b8f5b&units=metric`)
      .then(response=>{
        setWeatherData(response.data); // Updating weather data state
      }).catch(error=>{
        console.error("error",error); // Handling error
      })
    }
  },[location])

  // Rendering loading state if weather data is not available
  if(!weatherData) return <div>Loading</div>;

  // Calculating day or night time based on sunrise and sunset
  const currentTime = new Date().getTime() / 1000
  const localTime = currentTime + weatherData.timezone
  const isDayTime = localTime > weatherData.sys.sunrise && localTime < weatherData.sys.sunset 
  const cloudSize = weatherData.clouds.all

  // Returning JSX for weather widgets
  return (
    <div className='widget-organiser'>
      {/* Main weather widget */}
      <div className='weatherWidget'>
        {isDayTime ? <SunSvg className='sun'/> : <MoonSvg className='moon'/>}
        <div className='cloud-container'>
          {cloudSize > 50 && <CloudSvg className='cloud'/>}
        </div>
        <div className='temperature'>{Math.round(weatherData.main.temp)}°C</div>
        <div className='sunset'>{location}</div>
      </div>

      {/* Additional weather widgets */}
      <div className='weatherWidget'>
      <Link to="/sun" > 
        <SunSetSvg className='sunset'/>
        <div className='sunsetTitle'>Sunset {Math.round(weatherData.sys.sunset / 86400)}</div>
      </Link>
      </div>

      <div className='weatherWidget'>
      <Link to="/poll" > 
        <PollutionSvg className='pollution'/>
        <div className='pollutioText'>{Math.round(weatherData.sys.sunrise / 86400)} Pollution</div>
      </Link>
      </div>

      <div className='weatherWidget'>
      <Link to="/rain" > 
        <RainfallSvg className='rainfall'/>
        <div className='rainfallText'>{weatherData.rain}Rainfall</div>
      </Link>
      </div>

      <div className='weatherWidget'>
      <Link to="/uv" > 
        <UVSvg className='uv'/>
        <div className='uvText'>{weatherData.wind.speed} UV</div>
      </Link>
      </div>

      <div className='weatherWidget'>
      <Link to="/pressure" > 
        <PressureSvg className='pressure'/>
        <div className='pressureText'>{weatherData.main.pressure} Pressure</div>
      </Link>  
      </div>
      
      <div className='weatherWidget'>
      <Link to="/vis" > 
        <FogSvg className='visibility'/>
        <div className='visibilityText'>{weatherData.visibility} Visibility</div>
      </Link>

      </div>
    </div>
  )
}

export default Widgets; // Exporting default Widgets component
