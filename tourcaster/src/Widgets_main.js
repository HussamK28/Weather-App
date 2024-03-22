import React from 'react';
import Sunset from './new_sun';
import Pollution from './new_pollution'; 
import Visibility from './new_visibility'
import UV from './new_UV'
import Pressure from './new_pressure'
import Rain from './new_p_rain'
import Widgets from './Widgets';
import Weather from './Weather'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 

function Widgets_main() {
  return (

    
    <Router>  
      <div>
        <Switch>

        {/* Route links the specific url, using exact to make sure it always precise */}

        <Route exact path="/create"> 


            <Weather/>  
          </Route>

          <Route exact path="/poll">
            <Pollution/>
          </Route>  

          <Route exact path="/sun">
            <Sunset/>
          </Route>

          <Route exact path="/pressure">
            <Pressure/>
          </Route>  

          <Route exact path="/vis">
            <Visibility/>
          </Route>

          <Route exact path="/rain">
            <Rain/>
          </Route>

          <Route exact path="/uv">
            <UV/>
          </Route>



        </Switch>
      </div>
    </Router>  
  );
}


export default Widgets_main;
