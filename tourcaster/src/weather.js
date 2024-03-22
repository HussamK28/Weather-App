import React, { useLayoutEffect, useState } from 'react';
import Widgets from './widgets'; // Importing the Widgets component from another file
import './weather.css';
import { otherWidget } from './widgets'; // Importing otherWidget from './widgets'

function Weather() {
  // State for input value and location
  const [inputValue, setinputValue] = useState('London');
  const [location, setLocation] = useState('London');

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Preventing default form submission behavior
    setLocation(inputValue); // Updating location state with input value
  };

  // Rendering the Weather component
  return (
    <div className='page'>
      {/* Form for updating location */}
      <form className='form' onSubmit={handleFormSubmit}>
        {/* Input field for location */}
        <input
          className='input'
          type="text"
          value={inputValue}
          onChange={(e) => {
            setinputValue(e.target.value); // Updating input value state
          }}
        />
        {/* Submit button for updating location */}
        <button className='submit' type="submit">Update Location</button>
      </form>

      {/* Rendering Widgets component with location prop */}
      <Widgets location={location} />
    </div>
  );
}

export default Weather; // Exporting Weather component as default
