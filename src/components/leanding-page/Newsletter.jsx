import React from 'react';

function Newsletter() {
  return (
    <section id="about" className="newsletter container reveal">
      <div className="nl-eyebrow"><i className="ph-fill ph-envelope-simple"></i> STAY IN THE LOOP</div>
      <h2>Get Learning Tips & New Course Alerts</h2>
      <p>Join 10,000+ learners who get our weekly newsletter with curated resources and exclusive discounts.</p>

      <form className="nl-form" onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }}>
        <input id="newsletter-email" className="nl-input" type="email" placeholder="Enter your email address..." required />
        <button id="newsletter-submit" className="btn btn-primary">Subscribe <i className="ph-bold ph-arrow-right"></i></button>
      </form>

      <div className="nl-note">No spam, ever. Unsubscribe anytime.</div>
    </section>
  );
}

export default Newsletter;
