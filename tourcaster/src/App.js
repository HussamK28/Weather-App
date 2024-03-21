import React from 'react';
import './App.css';
import NavBar from './Components/Navbar';
import SearchBar from './Components/SearchBar';
import Landmarks from './Components/Landmarks';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {

  const searchChange = (searchData) => {
    console.log(searchData)
  }
  
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/searchBar'>
              <SearchBar />
            </Route>
            <Route path='/Landmarks'>
              <Landmarks />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;
