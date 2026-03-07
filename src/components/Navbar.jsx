import React from 'react';
import { Link} from 'react-router-dom';

const Navbar = () => {

  return (
    <nav>
      <ul className="flex flex-row gap-2" style={{ listStyle: 'none' }}>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/menu">MENU</Link></li>
        <li><Link to="/reservations">RESERVATION</Link></li>
        <li><Link to="/order">ORDER ONLINE</Link></li>
        <li><Link to="/login">LOGIN</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;