import React from 'react';
import logo from "../../img/Frame 685.png"
import './Footer.css'
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='container'>
           <div className='footer'>
            <div>
           <div className='logosection'>
           <img src={logo}/>
            <h6>OR<span className='logo-name'>BIDO</span></h6>
           </div>
           <p className='text'>A new way to make the payments easy, reliable and secure.</p>
            <div>
             
            </div>
            </div>
            <div className='links'>
            <h6>Useful Links</h6>
            <ul>
                <li><Link to="/content">Content</Link></li>
                <li><Link to="/content">How it Works</Link></li>
                <li><Link to="/content">Create</Link></li>
                <li><Link to="/content">Explore</Link></li>
                <li><Link to="/content">Terms & Service</Link></li>
            </ul>
            </div>
            <div className='community'>
            <h6>Community</h6>
            <ul>
                <li><Link to="/content">Help center</Link></li>
                <li><Link to="/content">Partners</Link></li>
                <li><Link to="/content">Suggestion</Link></li>
                <li><Link to="/content">Blog</Link></li>
                <li><Link to="/content">Newsletters</Link></li>
            </ul>
            </div>
            <div className='partner'>
            <h6>Partner</h6>
            <ul>
                <li><Link to="/content">Our Partner</Link></li>
                <li><Link to="/content">Beacome a Partner</Link></li>
                
            </ul>
            </div>
         </div> 
         <hr/>
        <div className='copyright'>
        <p>Copyright <span>&copy;</span> 2023 Orbido. All Rights Reserved.</p>
        </div>
        </div>
    );
};

export default Footer;