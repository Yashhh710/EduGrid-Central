import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/models/logo.png';

function Navbar({ onOpenLogin }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <nav id="navbar">
          <a href="#" className="logo">
            <div className="logo-icon">              
            <div className="logo-icon"><i className="ph-fill ph-graduation-cap"></i></div>
            </div>
            <div>
              <div className="logo-title">EduGrid <span>Central</span></div>
              <div className="logo-subtitle">EMPOWERING EDUCATION</div>
            </div>
          </a>

          <ul className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`}>
            <li><a href="#" onClick={() => setMobileOpen(false)}>Home</a></li>
            <li><a href="#features" onClick={() => setMobileOpen(false)}>Features</a></li>
            <li><a href="#courses" onClick={() => setMobileOpen(false)}>Courses</a></li>
            <li><a href="#impact" onClick={() => setMobileOpen(false)}>Our Impact</a></li>
            <li><a href="#pricing" onClick={() => setMobileOpen(false)}>Pricing</a></li>
          </ul>

          <div className="nav-actions">
            <button type="button" className="btn btn-ghost" onClick={() => { onOpenLogin?.(); setMobileOpen(false); }}>Sign In</button>
            <button type="button" className="btn btn-primary" onClick={() => { onOpenLogin?.(); setMobileOpen(false); }}>Get Started ⮞</button>
          </div>

          <button 
            className="btn btn-ghost menu-toggle" 
            style={{ display: 'none', padding: '0.5rem', fontSize: '1.5rem' }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <i className={mobileOpen ? "ph ph-x" : "ph ph-list"}></i>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;