import React, { useState, useEffect } from 'react';

import './reroute.css';

export const Landmark = ({ title, opening, close, popular }) => {
  return (
    <div className="widget">
      <div className="box">
        <div className="rectangle">
          <div className="title">{title}</div>
          <div className="time-container">
            {/* Displaying opening hours */}
            <div className="opening">{opening}</div>
          </div>
          {/* Displaying closing hours */}
          <div className="close">{close}</div>
          {/* Displaying popular hours */}
          <div className="popular">{popular}</div>
        </div>
      </div>
    </div>
  );
};

function Reroute() {
  const [hoursData, setHoursData] = useState(null); // State to store the hours data
  const [selectedDay, setSelectedDay] = useState(1); // State to store the selected day

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'fsq3p1AVKj06VvJjdczwV7cUH4Ccb2e/4F/JyPXZgNFEYTg='
      }
    };

    fetch('https://api.foursquare.com/v3/places/4bef48fcc80dc9284ec827e3?fields=hours%2Chours_popular', options)
      .then(response => response.json())
      .then(data => {
        setHoursData(data); // Set the hours data in state
      })
      .catch(err => console.error(err));
  }, []);

  // Function to format the time to HH:MM format
  const formatTime = (time) => {
    if (!time) return 'Closed'; // Handle case where time is not available
    const hours = time.substr(0, 2);
    const minutes = time.substr(2);
    return `${hours}:${minutes}`;
  };

  // Function to handle day selection
  const handleDayChange = (event) => {
    setSelectedDay(parseInt(event.target.value)); // Update the selected day
  };

  // Function to get the most popular hours for the selected day
  const getPopularHoursForDay = () => {
    if (!hoursData || !hoursData.hours_popular) return '';

    const popularHoursForDay = hoursData.hours_popular.filter(hour => hour.day === selectedDay);

    if (popularHoursForDay.length === 0) return 'No popular hours available for selected day';

    return popularHoursForDay.map(hour => `${formatTime(hour.open)} - ${formatTime(hour.close)}`).join(', ');
  };

  // Function to get the regular hours for the selected day
  const getRegularHoursForDay = () => {
    if (!hoursData || !hoursData.hours || !hoursData.hours.regular) return '';

    const regularHoursForDay = hoursData.hours.regular.find(hour => hour.day === selectedDay);

    if (!regularHoursForDay) return 'No regular hours available for selected day';

    return `${formatTime(regularHoursForDay.open)} - ${formatTime(regularHoursForDay.close)}`;
  };

  return (
    <div className='page'>
      <h1>Reroute</h1>
      {/* Dropdown for day selection */}
      <div className="select-container">
        <select value={selectedDay} onChange={handleDayChange}>
          <option value={1}>Monday</option>
          <option value={2}>Tuesday</option>
          <option value={3}>Wednesday</option>
          <option value={4}>Thursday</option>
          <option value={5}>Friday</option>
          <option value={6}>Saturday</option>
          <option value={7}>Sunday</option>
        </select>
      </div>
      {/* Display the most popular hours for the selected day */}
      <Landmark
        title={`Popular Hours for ${getDayName(selectedDay)}`}
        popular={getPopularHoursForDay()}
      />
      {/* Display the regular hours for the selected day */}
      <Landmark
        title={`Regular Hours for ${getDayName(selectedDay)}`}
        popular={getRegularHoursForDay()}
      />
    </div>
  );
}

// Helper function to get the name of the day from its index
const getDayName = (dayIndex) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday', ];
  return days[dayIndex - 1]; // Subtract 1 to match JavaScript's day index (Sunday is 0)
};

export default Reroute;
