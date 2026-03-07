import React from 'react'
import menuImage from '../assets/images/greek-salad.jpg';

const SpecialCard = ({ title, price, description }) => (
  <div className="card flex-1">
    <div style={{ minHeight: '150px' }}>
      <img src={menuImage} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
    <div className="card-content flex-col gap-1">
      <div className="flex justify-between align-center">
        <h3>{title}</h3>
        <span className="text-highlight">{price}</span>
      </div>
      <p style={{ fontSize: '0.9rem' }}>{description}</p>
      <strong>Order delivery</strong>
    </div>
  </div>
);

export default SpecialCard