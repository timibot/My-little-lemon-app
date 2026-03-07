import React from 'react'

const Testimonials = () => (
  <section className="bg-dark">
    <div className="container">
      <h2 style={{ marginBottom: '30px' }}>TESTIMONIALS</h2>
      <div className="responsive-row gap-2">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="flex-1 flex-col align-center gap-1">
            <h3>Rating</h3>
            <div className="img-placeholder" style={{ width: '100px', minHeight: '100px', backgroundColor: '#e2e2e2' }}></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials