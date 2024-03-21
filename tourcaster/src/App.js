// App.js
import React from 'react';
import './App.css';
import SearchBar from './Components/searchBar';
import Landmarks from './Components/Landmarks'

const App = () => {

  const searchChange = (searchData) => {
    console.log(searchData)
  }

  return (
    <div className='container'>
      <SearchBar onSearchChange={searchChange}/>
      <br />
      <Landmarks /> 
      <br />

    </div>
  );
};

export default App;
