import React from 'react';
import footerImage from '../assets/images/logo.svg';

const Footer = () => (
  <footer className="bg-green">
    <div className="container responsive-row gap-3">
      <div className="flex-1">
        <div style={{ height: '150px' }}>
          <img src={footerImage} alt="Little Lemon Logo" style={{ width: '100%', height: '100%'}} />
        </div>
      </div>
      <div className="flex-1 flex-col gap-1">
        <h3>Navigation</h3>
        <ul style={{ listStyle: 'none', lineHeight: '1.8' }}>
          <li>Home</li><li>About</li><li>Menu</li>
          <li>Reservation</li><li>Order online</li><li>Login</li>
        </ul>
      </div>
      <div className="flex-1 flex-col gap-1">
        <h3>Contact</h3>
        <ul style={{ listStyle: 'none', lineHeight: '1.8' }}>
          <li>Address</li><li>Phone number</li><li>Email</li>
        </ul>
      </div>
      <div className="flex-1 flex-col gap-1">
        <h3>Social media links</h3>
        <ul style={{ listStyle: 'none', lineHeight: '1.8' }}>
          <li>Address</li><li>Phone number</li><li>Email</li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;