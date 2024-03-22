import React from "react";
import "./css/new_sun.css";
import { Link } from "react-router-dom";
import Arrow from './assets/arrow3.png'
import Line from './assets/line1.png'
import sun_img from './assets/Sun.png'

const sun = () => {
    return (
        <div>
            <div id="images_sun">
                {/* Content for the images */}
                <Link to="/create">
                    <img src={Arrow} nameid="arrow3" id="arrow_sun" />
                    </Link>
                    <img src={sun_img} nameid="sun" id="sunset_1" />
            </div>

            {/* Title */}
            <div className="sun_div">
                <h1>Sunset</h1>
            </div>

            {/* Description */}
            <div className="sun_p">
            <p1>The apparent descent of the sun</p1>
            <br/>
            <p1>below the horizon.</p1>
            </div>

            {/* Line  */}

            <img src={Line} nameid="line1" id="line_sun" />            


            {/* API information */}

            <div className="sun_info">
                Sunset is the disappearance of the Sun below the horizon of the Earth due to its rotation. As viewed from everywhere on Earth,
                <br/>
                it is a phenomenon that happens approximately once every 24 hours, except in areas close to the poles.
                </div>





        </div>
    );
};
    
export default sun;
