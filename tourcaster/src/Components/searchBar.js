import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './searchBar.css'; // Import CSS file
import backArrow from './BackArrow.png'

const SearchBar = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const fetchData = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c395cc2852af511561efddfacf1ff5c2`
            );
            setWeatherData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    const handleInputChange = (e) => {
        setCity(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
    };

    return (
        <div className='search'>
            <div className='inputBox'>
            <input type="text" placeholder="Enter city name" value={city} onChange={handleInputChange} />
            <div className='searchButton'>
                <button onClick={handleSubmit}>Search</button>
            </div>
        </div>

            {weatherData ? (
                <>
                    <div className='infoBox'>
                        <h1 className='cityName'>{weatherData.name}, {weatherData.sys.country}</h1>
                        <h2 className='temp'>{weatherData.main.temp}°C</h2>
                        <h2 className='maxTemp'>H:{weatherData.main.temp_max}°C</h2>
                        <h2 className='minTemp'>L:{weatherData.main.temp_min}°C</h2>
                        <h3 className='desc'>{weatherData.description}</h3>
                    </div>
                </>
            ) : null}
        </div>
    );
};
export default SearchBar;
