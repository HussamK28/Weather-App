import React from "react";
import "./css/new_pressure.css";
import { Link } from "react-router-dom";
import Arrow from './assets/arrow3.png';
import Line from './assets/line1.png';
import press from './assets/pressure.png';


const pressure = () => {
    return (
        <div>
            <div id="images_pr">
                {/* Content for the images */}
                <Link to="/create">
                    <img src={Arrow} nameid="arrow3" id="arrow_pr" />
                    </Link>
                    <img src={press} nameid="pressure" id="pressure_1" />
            </div>

            {/* Title */}
            <div className="pr_div">
                <h1>Pressure</h1>
            </div>

            {/* Description */}
            <div className="pr_p">
            <p1>The weight of the air above an object exerts a </p1>
            <br/>
            <p1>force per unit area upon that object.</p1>
            </div>

            {/* Line  */}

            <img src={Line} nameid="line1" id="line_pr" />            


            {/* API information + In-depth Descripton */}

            <div className="pr_info">

                High pressure, light winds + clear skies, and low pressure, heavy winds + cloudy, 
                <br/>
                systems cause day-to-day changes in our weather.
                <br/>
                Pressure is measured in hectoPascals (hPa), also called millibars.
            </div>


        </div>
    );
};
    
export default pressure;
