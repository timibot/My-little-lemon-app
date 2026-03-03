import React from 'react';
import logo from '../assets/images/Logo.svg';

const Header = ({ children }) => {
  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px' }}>
      <img
        src={logo}
        alt="Little Lemon Logo"
        style={{ height: '50px' }}
      />
      {children}
    </header>
  );
};


export default Header;