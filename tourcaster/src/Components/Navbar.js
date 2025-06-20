import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const NavBar = () => {
    return (
        <>
            <nav>
                <ul>
                <li>
                     <Link to='/'>Home </Link>
                    </li>
                    <li>
                        <Link to='/SearchBar'>Weather by Location  </Link>
                    </li>
                    <li>
                        <Link to='/Weather'>Weather Widgets </Link>
                    </li>
                    <li>
                        <Link to="/Landmarks">Landmarks </Link>
                    </li>
                    <li>
                        <Link to="/Reroute">Reroute </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;
