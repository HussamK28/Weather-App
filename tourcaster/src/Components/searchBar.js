import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './searchBar.css'; // Import CSS file
import SearchIcon from '@mui/icons-material/Search'; // import searchIcon button
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

    const clickBackArrow = () => {
        window.location.href = "https://www.google.co.uk/?client=safari"
    }
    return (
        <div className='search'>
            <img src={backArrow} alt='backArrow' className='backArrow'width={50} onClick={clickBackArrow}/>
            <div className='inputBox'>
                <input type="text" placeholder="Enter city name" value={city} onChange={handleInputChange} />
                <div className='searchButton'><SearchIcon onChange={handleSubmit} /></div>
            </div>
            {weatherData ? (
                <>
                    <div className='infoBox'>
                        <h1 className='cityName'>{weatherData.name}, {weatherData.sys.country}</h1>
                        <h2 className='temp'>{weatherData.main.temp}°C</h2>
                        <h2 className='maxTemp'>{weatherData.main.temp_max}°C</h2>
                        <h2 className='minTemp'>{weatherData.main.temp_min}°C</h2>
                    </div>
                </>
            ) : null}
        </div>
    );
};
export default SearchBar;
