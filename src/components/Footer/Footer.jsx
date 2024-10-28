import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import { faXTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Get a Vaniq Card</h2>
          <ul>
            <li><a href="#view-cards">View Cards</a></li>
            <li><a href="#credit-cards">Credit Cards</a></li>
            <li><a href="#dollar-euro-cards">Dollar and Euro Currency Cards</a></li>
            <li><a href="#business-cards">Business Cards</a></li>
            <li><a href="#corporate-cards">Corporate Cards</a></li>
          </ul>
        </div>
        
        {/* More Products & Services section */}
        <div className="footer-section">
          <h2>More Products & Services</h2>
          <ul>
            <li><a href="#membership-rewards">Membership Rewards Programme</a></li>
            <li><a href="#merchant-services">Merchant Services</a></li>
            <li><a href="#pay-bank-transfer">Pay with Bank Transfer</a></li>
            <li><a href="#global-network">Global Network</a></li>
            <li><a href="#ways-to-pay">Ways to Pay</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h2>Important Links</h2>
          <ul>
            <li><a href="#form-document-centre">Form & Document Centre</a></li>
            <li><a href="#atm-locator">ATM Locator</a></li>
            <li><a href="#faq">Frequently Asked Questions</a></li>
            <li><a href="#moving-abroad">Moving Abroad?</a></li>
            <li><a href="#financial-hardship">Financial Hardship & Difficult Times</a></li>
            <li><a href="#life-with-amex">Life with Amex</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h2>Company Information</h2>
          <ul>
            <li><a href="#about-amex">About Vaniq</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
            <li><a href="#uk-inclusion-diversity">UK Inclusion & Diversity</a></li>
            <li><a href="#uk-modern-slavery">UK Modern Slavery Act</a></li>
            <li><a href="#uk-tax-strategy">UK Tax Strategy</a></li>
            <li><a href="#uk-governance-reporting">UK Governance Reporting</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-legal">
        <ul className="footer-legal-links">
          <li><a href="#rules-regulations">Rules and Regulations</a></li>
          <li><a href="#trademarks">Trademarks</a></li>
          <li><a href="#privacy">Privacy Centre</a></li>
          <li><a href="#complaint-handling">Complaint Handling</a></li>
          <li><a href="#sitemap">Site Map</a></li>
          <li><a href="#accessibility">Accessibility</a></li>
          <li><a href="#bank-rate">Bank of England Base Rate</a></li>
          <li><a href="#fx-ecb">FX-ECB Comparison (UK)</a></li>
          <li><a href="#cookie-policy">Cookie Policy</a></li>
          <i class="fa-brands fa-x-twitter"></i>
        </ul>
      <div className="footer-bottom">
        <p>&copy; 2024 Vaniq. All rights reserved.</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
