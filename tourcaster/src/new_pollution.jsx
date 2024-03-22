import React from "react";
import "./css/new_pollution.css";
import { Link } from "react-router-dom";
import Arrow from './assets/arrow3.png'
import Line from './assets/line1.png'
import pol from './assets/poll_cloud.png'


const pollution = () => {
    return (
        <div>
            <div id="images_pollution">
                {/* Content for the images */}
                <Link to="/create">
                    <img src={Arrow} nameid="arrow3" id="arrow_pollution" />
                    </Link>
                    <img src={pol} nameid="poll_cloud" id="poll_cloud_1" />
            </div>

            {/* Title */}
            <div className="poll_div">
                <h1>Pollution</h1>
            </div>

            {/* Description */}
            <div className="poll_p">
            <p1>Air pollution consists of chemicals or particles in the air</p1>
            <br/>
            <p1>that can harm the health of humans, animals, and plants.</p1>
            </div>

            {/* Line  */}

            <img src={Line} nameid="line1" id="line_poll" />            


            {/* API information + In-depth Descripton */}

            <div className="poll_info">
    
                Air pollution is described on a scale of 1-10 where 1
                <br/>
                corresponds to 'Low' pollution and 10 corresponds to 'Very High' pollution.
                </div>







        </div>
    );
};
    
export default pollution;
