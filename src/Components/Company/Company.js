import React from 'react';
import './Company.css'
import airbnb from "../../img/airbnb.png"
import binance from "../../img/binance.png"
import coinbase from "../../img/coinbase.png"
import dropbox from "../../img/dropbox.png"
import { Dropbox } from 'react-bootstrap-icons';
const Company = () => {
    return (
        <div className='container'>
          <div className='company'>
          <img src={airbnb} />
          <img src={binance} />
          <img src={coinbase} />
         <div className='dropbox'>
            <Dropbox className='dropbox-icon w-10'/>
            <img src={dropbox} />
         </div>
            </div>  
        </div>
    );
};

export default Company;