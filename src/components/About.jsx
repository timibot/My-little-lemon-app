import React from 'react'
import image from '../assets/images/restaurant.jpg'

const About = () => (
  <section className="container responsive-row align-center" style={{ padding: '60px 20px' }}>
    <div className="flex-1 flex-col gap-1">
      <h1>Little Lemon</h1>
      <h2>Lagos</h2>
      <p>Welcome to Little Lemon, bringing the vibrant and refreshing flavors of the Mediterranean right to the heart of Lagos. We pride ourselves on serving rustic, traditional recipes crafted with a modern twist and the freshest local ingredients.</p>
      <p>Whether you are joining us for a quick business lunch or a relaxed weekend dinner with family, our warm atmosphere and signature citrus-infused dishes guarantee an unforgettable dining experience.</p>
    </div>
    <div className="flex-1">
      <div style={{ height: '250px' }}>
        <img src={image} alt="Restaurant" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    </div>
  </section>
);

export default About