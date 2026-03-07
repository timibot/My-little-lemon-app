import React from 'react'
import image from '../assets/images/Mario and Adrian b.jpg';

const Hero = () => (
  <section className="bg-green">
    <div className="hero container responsive-row align-center">
      <div className="flex-1 flex-col gap-1">
        <h1>Little Lemon</h1>
        <h2>Lagos</h2>
        <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. Join us for vibrant flavors and a warm atmosphere right here in the heart of Lagos.</p>
      </div>
      <div className="flex-1">
        <img src={image} alt="Mario and Adrian" style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
  </section>
);

export default Hero