import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './searchBar.css'; // Import CSS file
import SearchIcon from '@mui/icons-material/Search';

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
                <div className='searchButton'><SearchIcon onClick={handleSubmit} /></div>
            </div>
            {weatherData ? (
                <>
                    <div className='infoBox'>
                        <h2>{weatherData.name}, {weatherData.sys.country}</h2>
                        <h3>{new Date(weatherData.dt * 1000).toLocaleString()}</h3>
                        <h3>{weatherData.timezone_offset}</h3>
                        <h2 className='temp'>{weatherData.main.temp}°C</h2>
                    </div>
                </>
            ) : null}
        </div>
    );
};
export default SearchBar;
