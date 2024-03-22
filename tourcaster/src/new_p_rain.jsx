import React from "react";
import "./css/new_p_rain.css";
import { Link } from "react-router-dom";
import Arrow from './assets/arrow3.png'
import Line from './assets/line1.png'
import Rain_img from './assets/Rain.png'


const Rain = () => {
    return (
        <div>
            <div id="images_rain">
                {/* Content for the images */}
                <Link to="/create">
                    <img src={Arrow} nameid="arrow3" id="arrow_rain" />
                    </Link>
                    <img src={Rain_img} nameid="Rain" id="Rain_1" />
            </div>

            {/* Title */}
            <div className="rain_div">
                <h1>% Chance of Rain</h1>
            </div>

            {/* Description */}
            <div className="rain_p">
            <p1>The statistical probability that a given point in an area for which the forecast is being prepared,  </p1>
            <br/>
            <p1>receives at least 0.01 mm of precipitation in the specified time period.</p1>
            </div>

            {/* Line  */}

            <img src={Line} nameid="line1" id="line_rain" />            


            {/* API information + In-depth Descripton */}

            <div className="rain_info">

                Probability of Precipitation equation: PoP = C x A.  
                <br/>
                Confidence - "C" - that a meteorologist has that rain will occur somewhere in the area 
                <br/>
                "A" is the percentage of the area where a forecast is expected to receive a measurable amount of rain. 
            </div>


        </div>
    );
};
    
export default Rain;
