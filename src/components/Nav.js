import React from 'react';

const Nav = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/order-online">Order Online</a></li>
        <li><a href="/reservation">Reservation</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
};

export default Nav;