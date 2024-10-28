import React from 'react';
import './Features.css';
import Vaniqlounge from '../../assets/Vaniqlounge.jpg';
import Vaniqresturant from '../../assets/Vaniqresturant.jpg';
import Vaniqtravel from '../../assets/Vaniqtravel.jpg';
import Vaniqservice from '../../assets/Vaniqservice.mp4';
import iphoneimg3 from '../../assets/iphoneimg3.png';
import Vaniqblackbg from '../../assets/Vaniqblackbg1.jpg';

const Features = () => {
  return (
    <div>
      <section className="feature-section lounge-section">
        <img className="img1" src={Vaniqlounge} alt="Airport Lounges" />
        <div className="feature-content">
          <h3>Airport Lounges</h3>
          <p>At Vaniq, you can elevate your travel experience by enjoying complimentary access to airport lounges worldwide. 
            Whether you're traveling for business or leisure, take advantage of a serene environment with comfortable seating, 
            complimentary refreshments, high-speed Wi-Fi, and more. Escape the hustle and bustle of the airport and unwind in style 
            before your flight.</p>
            <button className='learn-btn'>Learn More</button>
        </div>
      </section>
      <section className="feature-section restaurant-section">
        <img  className="img1" src={Vaniqresturant} alt="Restaurant Reservations" />
        <div className="feature-content">
          <h3>Restaurant Reservations</h3>
          <p>Enjoy top dining experiences with Vaniq's exclusive restaurant reservations. 
            Whether you’re craving gourmet cuisine, celebrating a special occasion, or exploring new flavors, Vaniq makes it easy. 
            As a member, secure a table at top restaurants worldwide with exclusive discounts, priority seating, and personalized recommendations.</p>
            <button className='learn-btn'>Learn More</button>
        </div>
      </section>
      <section className="feature-section travel-section">
        <img className="img1" src={Vaniqtravel} alt="Travel Insurance" />
        <div className="feature-content">
          <h3>Travel Insurance</h3>
          <p>Travel with peace of mind with Vaniq's comprehensive insurance plans. Whether you're embarking on a short weekend getaway or an extended international adventure, our insurance coverage ensures you're protected every step of the way. From trip cancellations and lost luggage to medical emergencies abroad, we've got you covered.</p>
          <button className='learn-btn'>Learn More</button>
        </div>
      </section>
      <section className="feature-section restaurant-section">
        <img className="img1" src={Vaniqblackbg} alt="Restaurant Reservations" />
        <div className="feature-content">
          <h3>Vaniq Black Card</h3>
          <p>Enjoy top dining experiences with Vaniq's exclusive restaurant reservations. 
            Whether you’re craving gourmet cuisine, celebrating a special occasion, or exploring new flavors, Vaniq makes it easy. 
            As a member, secure a table at top restaurants worldwide with exclusive discounts, priority seating, and personalized recommendations.</p>
            <button className='learn-btn'>Learn More</button>
        </div>
      </section>
      <section className="feature-section service-section">
        <img className="iphone"src={iphoneimg3} alt="24/7 services" />
        <div className="feature-content">
          <h3>24/7 Service</h3>
          <p>Access support anytime, anywhere with Vaniq's 24/7 customer service. Whether you need assistance with transactions, 
            have a question about your account, or need help while traveling, our team is always available to ensure your needs are met.</p>
            <button className='learn-btn'>Learn More</button>
        </div>
      </section>
      <section className="reviews-section">
        <div className="reviews-banner">
          <h2>Our Customers Love Us</h2>
          <h3>Here’s what they have to say :</h3>
        </div>
        <div className="reviews-content">
          <div className="review">
            <p>"Vaniq has completely changed the way I travel! The 24/7 customer support is a lifesaver, especially when things don't go as planned. Highly recommend!"</p>
            <h4>Sarah Jenowski ★★★★★
            </h4>
          </div>
          <div className="review">
            <p>"The airport lounge access is fantastic. I travel often for business, and having a quiet space with all the amenities makes my trips so much smoother."</p>
            <h4>Mark Leny ★★★★☆</h4>
          </div>
          <div className="review">
            <p>"From booking restaurant reservations to travel insurance, Vaniq makes everything easy and stress-free. I can't imagine traveling without it now!"</p>
            <h4>Emily Reno ★★★★★</h4>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Features;
