import React from 'react';
import logo from '../assets/images/logo.svg';
import Navbar from './Navbar';

const Header = () => (
  <header className="container flex flex-row justify-between align-center" style={{ padding: '20px' }}>
    <div>
      <img src={logo} alt="Little Lemon Logo" style={{ width: '100%', height: 'auto' }} />
    </div>
    <Navbar />
  </header>
);

export default Header;