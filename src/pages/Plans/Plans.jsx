import React from 'react';
import './Plans.css';
import { Link } from 'react-router-dom';
import Vaniqbluebg from '../../assets/Vaniqbluebg.png';
import Vaniqblackbg1 from '../../assets/Vaniqblackbg1.jpg';
import AsSeenOn from '../../components/AsSeenOn/AsSeenOn';
import whiteblackmini from '../../assets/whiteblackmini.png';
import bluewhitemini from '../../assets/bluewhitemini.png';

const Plans = () => {
  return (
    <div className="plans-container">
      
      {/* Cards Wrapper */}
      <div className="plan-cards-wrapper">
        {/* Vaniq Card */}
        <div className="plan-card">
          <h2 className="plan-title">Vaniq Card</h2>
          <p className="plan-price">Free</p>
          <p className="plan-description">
            Enjoy the essential banking features with no additional cost.
          </p>
          <div className="plan-features">
            <p><span className="bullet-point">•</span> Basic banking services</p>
            <br />
            <p><span className="bullet-point">•</span> No annual fees</p>
            <br />
            <p><span className="bullet-point">•</span> Access to standard features</p>
            <br />
            <p><span className="bullet-point">•</span> 1 Free lounge pass a month</p>
          </div>
          <img className="plan-image" src={Vaniqbluebg} alt="Vaniq Blue Card" />
         <Link to="/OpenAccount">
         <button className="plan-btn">Open Account</button>
         </Link>
        </div>


        {/* Vaniq Black Card */}
        <div className="plan-card">
          <h2 className="plan-title">Vaniq Black Card</h2>
          <p className="plan-price">Annual fee £125</p>
          <p className="plan-description">
            Unlock premium features and exclusive benefits with Vaniq Black.
          </p>
          <div className="plan-features">
            <p><span className="bullet-point">•</span> All Vaniq features</p>
            <br />
            <p><span className="bullet-point">•</span> Premium rewards</p>
            <br />
            <p><span className="bullet-point">•</span> 24/7 Personal assistant</p>
            <br />
            <p><span className="bullet-point">•</span> Unlimited lounge access</p>
          </div>
          

          {/* Additional Benefits for Vaniq Black Card */}

          <img className="plan-image" src={Vaniqblackbg1} alt="Vaniq Black Card" />
          <Link to="/OpenAccount">
         <button className="plan-btn">Open Account</button>
         </Link>
        </div>
      </div>
      <div className="additional-benefits">
            <h3>Exclusive Benefits of the Vaniq Black Card</h3>
            <ul>
              <li>Unlimited Cashback: Earn 5% cashback on all purchases, no limits or categories.</li>
              <li>Priority Airport Lounge Access: Complimentary access to 1000+ lounges worldwide.</li>
              <li>Travel Insurance: Coverage up to $500,000 for free.</li>
              <li>Exclusive Deals: Special discounts and offers at top global merchants.</li>
              <li>Zero Annual Fees: Pay no additional annual fees for selected partners.</li>
              <li>24/7 Concierge Service: Enjoy personalized assistance for travel, dining, and more.</li>
            </ul>
          </div>
               <div className="additional-benefits">
            <h3>Exclusive Benefits of the Vaniq Black Card</h3>
            <ul>
              <li>Unlimited Cashback: Earn 5% cashback on all purchases, no limits or categories.</li>
              <li>Priority Airport Lounge Access: Complimentary access to 1000+ lounges worldwide.</li>
              <li>Travel Insurance: Coverage up to $500,000 for free.</li>
              <li>Exclusive Deals: Special discounts and offers at top global merchants.</li>
              <li>Zero Annual Fees: Pay no additional annual fees for selected partners.</li>
              <li>24/7 Concierge Service: Enjoy personalized assistance for travel, dining, and more.</li>
            </ul>
          </div>
          <div className='vaniqmobile-card'>
          <img className="reviewplan-img1" src={bluewhitemini} alt="Vaniq mobile blue" />
          <img className="reviewplan-img" src={whiteblackmini} alt="Vaniq mobile black " />
          </div>

      {/* As Seen On section */}
      <AsSeenOn />
    </div>
  );
};

export default Plans;
