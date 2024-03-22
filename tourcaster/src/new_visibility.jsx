import React from "react";
import "./css/new_visibility.css";
import { Link } from "react-router-dom";
import Arrow from './assets/arrow3.png'
import Line from './assets/line1.png'
import vis from './assets/Vis_cloud.png'


const visibility = () => {
    return (
        <div>
            <div id="images_visibility">
                {/* Content for the images */}
                <Link to="/create">
                    <img src={Arrow} nameid="arrow3" id="arrow_vis" />
                    </Link>
                    <img src={vis} nameid="vis_cloud" id="vis_cloud_1" />
            </div>

            {/* Title */}
            <div className="vis_div">
                <h1>Visibility</h1>
            </div>

            {/* Description */}
            <div className="vis_p">
            <p1>The measure of the distance at which you can see clearly</p1>
            </div>

            {/* Line  */}

            <img src={Line} nameid="line1" id="line_vis" />            


            {/* API information + In-depth Descripton */}

            <div className="vis_info">
                <br/>
                Measured in miles, with anything above 6mi is considered clear
            </div>


        </div>
    );
};
    
export default visibility;
