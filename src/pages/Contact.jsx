import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page page-padding">
      <div className="container">
        <header className="page-header text-center">
          <h1>Contact Us</h1>
          <p>Get in touch to schedule your appointment or ask any questions.</p>
        </header>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <h3>Get In Touch</h3>
              <ul className="info-list">
                <li>
                  <Phone className="info-icon" />
                  <div>
                    <span className="label">Phone</span>
                    <a href="tel:+918141778808" className="value">+91 8141778808</a>
                  </div>
                </li>
                <li>
                  <Mail className="info-icon" />
                  <div>
                    <span className="label">Email</span>
                    <a href="mailto:info@physiocare.com" className="value">info@physiocare.com</a>
                  </div>
                </li>
                <li>
                  <MapPin className="info-icon" />
                  <div>
                    <span className="label">Location</span>
                    <span className="value">Manjalpur, Vadodara, Gujarat</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="map-container">
              {/* Updated Google Maps Embed */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.6579222476575!2d73.19517207604983!3d22.303496379684347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5f906560407%3A0x6968d83962635338!2sManjalpur%2C%20Vadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1707145000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>

          <div className="contact-form-wrapper">
             <h3>Send a Message</h3>
             <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
               <div className="form-group">
                 <label htmlFor="name">Name</label>
                 <input type="text" id="name" placeholder="Your Name" required />
               </div>
               <div className="form-group">
                 <label htmlFor="email">Email</label>
                 <input type="email" id="email" placeholder="Your Email" required />
               </div>
               <div className="form-group">
                 <label htmlFor="phone">Phone</label>
                 <input type="tel" id="phone" placeholder="Your Phone Number" />
               </div>
               <div className="form-group">
                 <label htmlFor="message">Message</label>
                 <textarea id="message" rows="5" placeholder="How can we help you?" required></textarea>
               </div>
               <button type="submit" className="btn btn-full">Send Message <Send size={18} /></button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
