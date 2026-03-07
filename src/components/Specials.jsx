import React from 'react'
import SpecialCard from './SpecialCard';
import { Link } from 'react-router-dom';

const Specials = () => {
  const mockDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.";
  return (
    <section className="container" style={{ padding: '40px 20px' }}>
      <div className="flex justify-between align-center" style={{ marginBottom: '20px' }}>
        <h2>Specials</h2>
        <Link to="/reservations"><button className="btn">Reserve table</button></Link>
      </div>
      <div className="responsive-row gap-2">
        <SpecialCard title="Yam & Egg" price="N3,000" description={mockDescription} />
        <SpecialCard title="Yam & Egg" price="N3,000" description={mockDescription} />
        <SpecialCard title="Yam & Egg" price="N3,000" description={mockDescription} />
      </div>
    </section>
  );
};

export default Specials