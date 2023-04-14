import React from 'react';
import "./Billing.css"
import { Apple, Dribbble, GooglePlay, Paypal } from 'react-bootstrap-icons';
import cash from "../../../img/cash.png"
import netlfix from "../../../img/netflix.png"
import polygon from "../../../img/Polygon 2.png"
import apple from './../../../img/app-store-png-logo-33115.png'
import google from './../../../img/google-play-png-logo-3799.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Billing = () => {
    const payment=()=>{
        toast.success("Great!Your Payment is Successful")
    }
    return (
        <div className='container'>
             <div className='billing'>
            
          
            <div className='billing-left'>
                <div className='transication'>

             
            <div className='transication-card'>
             <div>   <h6 className='px-4'>Last Transaction</h6></div>
      <div>
        <div className='billing-card my-3'>
        <Dribbble className='drible-icon'/>
        <div>
            <h6>Dribbble Pro</h6>
            <p>15 Days ago</p>
        </div>
        </div>
        <div className='billing-card'>
        <div className='icon'><img src={netlfix}/></div>
        <div>
            <h6>Netflix Pro</h6>
            <p>4 Days ago</p>
        </div>
        <div>
 <img src={polygon} className='polygon'/>
        <p>-$250.93</p>
        </div>
        </div>
        <div className='billing-card'>
        <div className='icon'><img src={cash}/></div>
        <div>
            <h6>Manulife Cash</h6>
            <p>4 Days ago</p>
        
        </div>
        <div>
 <img src={polygon} className='polygon'/>
        <p>-$250.93</p>
        </div>
       
        </div>
        
      </div>
      </div>
      <div className='payment-card'>
        <div className='paypal'>
            <div className='icon'>
                <Paypal className='paypal-icon'/>
            </div>
            <div>
            <h6>Paypal</h6>
            <p>Checkout</p>
            </div>

        </div>
        <div className='paypal'>
           <div>
           <p>Total</p>
           <h6>210</h6>
           </div>
            <div>
            <button>Change</button>
            </div>

        </div>
        <button onClick={payment}>Make Payment</button>
        <ToastContainer/>
        </div>
      </div>
            </div>
             <div className='billing-right'>
            <h1>Easily control your billing & invoicing.</h1>
            <img src={apple} className='w-10'/>
            </div>
            </div>
        </div>
    );
};

export default Billing;