import React, { useEffect } from 'react';
import Navbar from '../components/leanding-page/Navbar.jsx';
import Hero from '../components/leanding-page/Hero.jsx';
import TrustedBy from '../components/leanding-page/TrustedBy.jsx';
import Features from '../components/leanding-page/Features.jsx';
import PopularCourses from '../components/leanding-page/PopularCourses.jsx';
import Impact from '../components/leanding-page/Impact.jsx';
import Testimonials from '../components/leanding-page/Testimonials.jsx';
import Achievements from '../components/leanding-page/Achievements.jsx';
import Pricing from '../components/leanding-page/Pricing.jsx';
import Footer from '../components/leanding-page/Footer.jsx';
import Newsletter from '../components/leanding-page/Newsletter.jsx';

function Home({ onOpenLogin }) {
  useEffect(() => {
    // ── SCROLL REVEAL IMPLEMENTATION ──
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, i * 60);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar onOpenLogin={onOpenLogin} />
      <Hero onOpenLogin={onOpenLogin} />
      <TrustedBy />
      <Features onOpenLogin={onOpenLogin} />
      <PopularCourses />
      <Impact onOpenLogin={onOpenLogin} />
      <Testimonials />
      <Achievements />
      <Pricing onOpenLogin={onOpenLogin} />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;