import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>CINEMATE is a family-friendly streaming website that provides over 30,000 <br/> independent movies and documentaries for free for its users</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@cinemate.com</p>
          <p>Phone: +233 209062712</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-media">
          <ion-icon name="logo-instagram">Instagram</ion-icon>
            
          <ion-icon name="logo-facebook">facebook</ion-icon>
          <ion-icon name="logo-whatsapp">Whatsapp</ion-icon>
          
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;