import React from "react";
import Cookies from 'js-cookie';
const Home = () => {
    return (
        <div>
        <h1>Home</h1>
        <h2>{Cookies.get('city:')}</h2>

        </div>
    )
}
export default Home;