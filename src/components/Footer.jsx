import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-column">
          <h3>PhysioCare</h3>
          <p>Restoring movement, improving life. Dedicated to your recovery and well-being.</p>
        </div>
        
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul className="contact-list">
            <li>
              <Phone size={18} />
              <span>+91 8141778808</span>
            </li>
            <li>
              <Mail size={18} />
              <span>info@physiocare.com</span>
            </li>
            <li className="location-item">
              <MapPin size={18} />
              <span>123 Wellness Ave, Health City</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} PhysioCare. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
