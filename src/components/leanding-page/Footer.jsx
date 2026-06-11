import React, { useState } from 'react';

function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setStatus('Please enter your email address.');
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setStatus('Please enter a valid email address.');
      return;
    }
    setStatus('Subscription successful!');
    setEmail('');
  };

  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="#" className="logo footer-logo">
              <div className="logo-icon"><i className="ph-fill ph-graduation-cap"></i></div>
              <div>
                <div className="logo-title" style={{ color: '#fff' }}>EduGrid <span style={{ color: 'var(--primary)' }}>Central</span></div>
                <div className="logo-subtitle" style={{ color: '#64748b' }}>EMPOWERING EDUCATION</div>
              </div>
            </a>
            <p className="footer-desc">
              Next generation Learning Management Experience crafted with modern layouts, high-end multimedia delivery modules, and fluid speed controls.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-ico"><i className="ph-bold ph-facebook-logo"></i></a>
              <a href="#" className="social-ico"><i className="ph-bold ph-twitter-logo"></i></a>
              <a href="#" className="social-ico"><i className="ph-bold ph-instagram-logo"></i></a>
              <a href="#" className="social-ico"><i className="ph-bold ph-linkedin-logo"></i></a>
            </div>
          </div>

          <div>
            <div className="footer-heading">Platform</div>
            <ul className="footer-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#courses">Popular Courses</a></li>
              <li><a href="#pricing">Pricing Plans</a></li>
              <li><a href="#">System Status</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-heading">Resources</div>
            <ul className="footer-links">
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Community Forum</a></li>
              <li><a href="#">Developer API</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-heading">Stay Updated</div>
            <p className="footer-desc" style={{ margin: '0 0 1rem' }}>Subscribe to our newsletter for new track alerts and design logs.</p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Join</button>
            </form>
            <div style={{ fontSize: '.75rem', marginTop: '.5rem', color: 'var(--primary-mid)' }}>{status}</div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #1e293b', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', fontSize: '.85rem', color: '#64748b' }}>
          <div>&copy; 2026 EduGrid Central. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
