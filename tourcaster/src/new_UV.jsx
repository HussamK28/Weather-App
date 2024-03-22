import React from "react";
import "./css/new_UV.css";
import { Link } from "react-router-dom";
import Arrow from './assets/arrow3.png'
import Line from './assets/line1.png'
import UV_img from './assets/UV.png'


const UV = () => {
    return (
        <div>
            <div id="images_UV">
                {/* Content for the images */}
                <Link to="/create">
                    <img src={Arrow} nameid="arrow3" id="arrow_UV" />
                    </Link>
                    <img src={UV_img} nameid="UV" id="UV_1" />
            </div>

            {/* Title */}
            <div className="UV_div">
                <h1>UV (ultraviolet) index</h1>
            </div>

            {/* Description */}
            <div className="UV_p">
            <p1>The UVI is a measure of the level of UV radiation</p1>
            </div>

            {/* Line  */}

            <img src={Line} nameid="line1" id="line_UV" />            


            {/* API information + In-depth Descripton */}

            <div className="UV_info">
           
                The values of the index range from zero upward - the higher the UVI, 
                <br/>
                the greater the potential for damage to the skin and eye, and the less time it takes for harm to occur.
                <br/>
                Anything above 5  -moderate- is considered high
            </div>


        </div>
    );
};
    
export default UV;
