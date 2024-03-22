
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './searchBar.css'; // Import CSS file
import GlobeLogo from './Globe.png'

const SearchBar = () => {
    const [city, setCity] = useState(''); // creates city variable and setCity function
    const [weatherData, setWeatherData] = useState(null);  // creates weatherData variable and setWeatherData function
    // FetchData function which gets the API call
    const fetchData = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c395cc2852af511561efddfacf1ff5c2`
            ); // API Call - which gets the user's input for city
            setWeatherData(response.data); // setWeatherData function stores data from API
            console.log(response.data);
        } catch (error) {
            console.error(error); // if API call does not work, then an error message occurs
        }
    };
    useEffect(() => {
        fetchData(); 
    }, []);
    const handleInputChange = (e) => {
        setCity(e.target.value); // setCity function sets user's search
    };
    const handleSubmit = (e) => { // when search button is clicked, function is carried out
        e.preventDefault();
        fetchData(); // calls fetchData function
    };

    /* Below is my HTML code:
    We have our search bar and button where user enters the city name. 
    The weatherData variable takes the data from the API docs
    */
    return (
        <div className='search'>
            <img src={GlobeLogo} alt='globe' width={50} /> <header className='header'>Weather By Location</header>
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
                        <h2 className='desc'>{weatherData.weather[0].description}</h2>
                        <h2 className='temp'>{weatherData.main.temp}°C</h2>
                        <h2 className='maxTemp'>H:{weatherData.main.temp_max}°C</h2>
                        <h2 className='minTemp'>L:{weatherData.main.temp_min}°C</h2>
                    </div>
                </>
            ) : null}
        </div>
    );
};
export default SearchBar;
