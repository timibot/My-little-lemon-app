// Footer.js
import React from 'react';

const Footer = ({ children }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
        {children}
      </div>
      
      <div className="footer-bottom" style={{ marginTop: '20px', fontSize: '0.8rem' }}>
        <p>&copy; {currentYear} Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;