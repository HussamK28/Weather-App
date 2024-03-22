import React from 'react';
import NavBar from './Components/Navbar';
import SearchBar from './Components/SearchBar';
import Landmarks from './Components/Landmarks';
import Homepage from './Homepage'
import Weather from './Weather';
import Reroute from './reroute';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css'

const App = () => {
  
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Homepage />
            </Route>
            <Route path='/searchBar'>
              <SearchBar />
            </Route>
            <Route path='/Weather'>
              <Weather />
            </Route>
            <Route path='/Landmarks'>
              <Landmarks />
            </Route>
            <Route path='/Reroute'>
              <Reroute />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;
