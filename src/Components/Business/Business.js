import React from 'react';
import './Business.css'
import { Send, ShieldFill, ShieldFillCheck, StarFill } from 'react-bootstrap-icons';
const Business = () => {
    return (
        <div className='container'>
            <div className='business'>
            <div className='business-left'>
                <h1 className='business-text'>You do the business, we’ll handle the money.</h1>
                <p>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
           <button>Get Started</button>
            </div>
            <div className='business-right'>
                <div className='business-card'>
              <div className='card-circle'>
              <StarFill className='card-icon'/>
              </div>
             <div>
             <h6>Rewards</h6>
              <p>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
                </div>
             </div>
                <div className='business-card'>
              <div className='card-circle'>
              <ShieldFillCheck className='card-icon'/>
              </div>
             <div>
             <h6>100% Secured</h6>
              <p>We take proactive steps make sure your information and transactions are secure.</p>
                </div>
             </div>
                <div className='business-card'>
              <div className='card-circle'>
              <Send className='card-icon'/>
              </div>
             <div>
             <h6>Balance Transfer</h6>
              <p>A balance transfer credit card can save you a lot of money in interest charges.</p>
                </div>
             </div>
            </div>
          
            </div>
            
        </div>
    );
};

export default Business;