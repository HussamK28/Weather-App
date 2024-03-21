import React, { useEffect, useState } from 'react'; // imported React
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded'; // imported city button
import SearchBar from './searchBar';
import './Landmarks.css'

const Landmarks = () => {
    const [city, setCity] = useState(''); // array to set city variable
    const [landmarkData, setLandmarkData] = useState(null); // array to set landmark data

    const fetchData = async () => { // function to fetch data from API
        try {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'fsq3KNUQAodTbqY9zXx82co2/s3fCkkGoluCrXvVynAEdJQ=' // API key from Foursquare
                }
            };
            // fetch API call from foursquareAPI, which calls for landmarks in our selected city

            const response = await fetch(`https://api.foursquare.com/v3/places/search?query=landmark&categories=16000&near=${city}`, options); 
            const data = await response.json(); // extracts the data and puts it in a json file
            if (data.results && data.results.length > 0) { // checks if the length of our API data is bigger than 0
                setLandmarkData(data.results); // If true, sets our setsLandmarkData variable as our API data
            } else {
                setLandmarkData(null); // else sets it to null
            }
            
        } catch(error) { // if there is an error in the API call, this will catch it.
            console.log(error);
        }
    };

    const handleSubmit = async (e) => { // function when submit button is pressed
        e.preventDefault();
        await fetchData(); // calls the fetch data function
    };

    const handleInputChange = (e) => {
        setCity(e.target.value); // sets setCity variable to user's input
    };

    return (
        <div className='search'>
            <div className='inputBox'>
                <input type="text" placeholder="Enter city name" value={city} onChange={handleInputChange} /> 
                <div className='searchButton'><LocationCityRoundedIcon onClick={handleSubmit} /></div>
            </div>
            {landmarkData ? (
                <div className='infoBox'>
                    <h1>Your nearest 3 landmarks are:</h1>
                    <div className='landmarkInfo'>
                    <img src={`${landmarkData[0].categories[0].icon.prefix}64${landmarkData[0].categories[0].icon.suffix}`} alt="Landmark Icon" />
                        <h2>{landmarkData[0].name}</h2>
                        <h3>{landmarkData[0].location.formatted_address}</h3>
                        <p>{landmarkData[0].description}</p>
                        
                    </div>
                    <div className='landmarkInfo'>
                    <img src={`${landmarkData[1].categories[0].icon.prefix}64${landmarkData[1].categories[0].icon.suffix}`} alt="Landmark Icon" />
                        <h2>{landmarkData[1].name}</h2>
                        <h3>{landmarkData[1].location.formatted_address}</h3>
                    </div>
                    <div className='landmarkInfo'>
                    <img src={`${landmarkData[2].categories[0].icon.prefix}64${landmarkData[2].categories[0].icon.suffix}`} alt="Landmark Icon" />
                        <h2>{landmarkData[2].name}</h2>
                        <h3>{landmarkData[2].location.formatted_address}</h3>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Landmarks;
