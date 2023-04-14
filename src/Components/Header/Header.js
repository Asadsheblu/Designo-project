import React from 'react';
import { BarChartFill, BarChartLine, SegmentedNav } from 'react-bootstrap-icons';

import "./Header.css"
import logo from "../../img/Frame 685.png"
import { Link } from 'react-router-dom';
const Header = () => {
    return (
       <>
   
        <header id="home">
            <nav className="container">
                <div className="logo">
                   <h6>OR<span>BIDO</span></h6>
                   <img src={logo} className=''/>
                </div>
                <input type="checkbox" id="nav-toggler"/>
                <label className="nav-toggler-icon" for="nav-toggler">
                    <SegmentedNav classNameName="bar-icon fas"/>
                  
                </label>
                <ul className="navigation">
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/feature">Feature</Link></li>
                    <li><Link to="/solution">Solution</Link></li>
                 
                   
                </ul>
               
                    
                
    
            </nav>
            </header>
            </>
    );
};

export default Header;