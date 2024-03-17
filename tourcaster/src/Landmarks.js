import React, { useEffect, useState } from 'react';
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded';
import Description from './Description';

const Landmarks = () => {
    const [city, setCity] = useState('');
    const [landmarkData, setLandmarkData] = useState(null);

    const fetchData = async () => {
        try {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'fsq3KNUQAodTbqY9zXx82co2/s3fCkkGoluCrXvVynAEdJQ='
                }
            };

            const response = await fetch(`https://api.foursquare.com/v3/places/search?query=landmark&categories=16000&near=${city}`, options);
            const data = await response.json();
            if (data.results && data.results.length > 0) {
                setLandmarkData(data.results);
            } else {
                setLandmarkData(null);
            }
        } catch(error) {
            console.log(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetchData();
    };

    const handleInputChange = (e) => {
        setCity(e.target.value);
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
                        <h2>{landmarkData[0].name}</h2>
                        <h3>{landmarkData[0].location.formatted_address}</h3>
                    </div>
                    <div className='landmarkInfo'>
                        <h2>{landmarkData[1].name}</h2>
                        <h3>{landmarkData[1].location.formatted_address}</h3>
                    </div>
                    <div className='landmarkInfo'>
                        <h2>{landmarkData[2].name}</h2>
                        <h3>{landmarkData[2].location.formatted_address}</h3>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Landmarks;
