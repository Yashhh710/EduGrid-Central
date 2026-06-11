import React, { useEffect, useRef } from 'react';

function Hero({ onOpenLogin }) {
  const activeStudentsRef = useRef(null);
  const coursesRef = useRef(null);

  const animateCount = (el, target, suffix = '') => {
    let start = 0;
    const dur = 2000;
    const step = target / (dur / 16);
    const run = () => {
      start = Math.min(start + step, target);
      el.textContent = (target >= 1000 ? (start / 1000).toFixed(1) + 'K' : Math.floor(start)) + suffix;
      if (start < target) requestAnimationFrame(run);
    };
    run();
  };

  useEffect(() => {
    if (activeStudentsRef.current) animateCount(activeStudentsRef.current, 25000, '+');
    if (coursesRef.current) animateCount(coursesRef.current, 1200, '+');
  }, []);

  return (
    <section className="hero container">
      {/* Left Column */}
      <div className="hero-content">
        <div className="pill">
          <i className="ph-fill ph-sparkle"></i> Future-Proof Your Skills
        </div>
        <h1 className="hero-title">
          Next-Generation <br />
          <span className="hl">LMS Experience</span> <br />
          Built For Everyone.
        </h1>
        <p className="hero-desc">
          EduGrid Central delivers an ultra-smooth dashboard, granular access management, lightning-fast tables, and premium multimedia lectures crafted for global visual excellence.
        </p>
        <div className="hero-ctas">
          <button type="button" className="btn btn-primary btn-lg" onClick={onOpenLogin}>Get Started Free</button>
          <a href="#" className="btn btn-outline-primary btn-lg"><i className="ph-bold ph-play-circle"></i> Watch Demo</a>
        </div>
        <div className="hero-stats">
          <div className="hs-item">
            <div ref={activeStudentsRef} className="hs-num">0K+</div>
            <div className="hs-label">Active Students</div>
          </div>
          <div className="hs-item">
            <div ref={coursesRef} className="hs-num">0K+</div>
            <div className="hs-label">Courses Available</div>
          </div>
          <div className="hs-item">
            <div className="hs-num">4.9<span>★</span></div>
            <div className="hs-label">Average Rating</div>
          </div>
        </div>
      </div>

      {/* Right Column Visuals */}
      <div className="hero-visual">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="dots-grid dg-tr"></div>
        <div className="dots-grid dg-bl"></div>
        <div className="hero-img-wrap">
          <img src="/models/hero.png" alt="Students learning" onError={(e) => { e.target.style.display = 'none'; }} />
          <div className="hero-img-overlay"></div>
        </div>

        {/* Video Card */}
        <div className="fc fc-video">
          <div className="vc-header">
            <span className="vc-title">HTML Basics — Lesson 3</span>
            <div className="vc-dots"><span></span><span></span><span></span></div>
          </div>
          <div className="vplayer">
            <div className="vplayer-waves"></div>
            <div className="play-btn"><i className="ph-fill ph-play"></i></div>
            <div className="vplayer-bar">
              <i className="ph-fill ph-speaker-high"></i>
              <span>10:30 / 32:45</span>
              <div className="vbar-track"><div className="vbar-fill"></div></div>
              <i className="ph ph-corners-out"></i>
            </div>
          </div>
        </div>

        {/* Progress Ring Card */}
        <div className="fc fc-progress">
          <div style={{ fontSize: '.72rem', fontWeight: 700, marginBottom: '.75rem', textAlign: 'left' }}>Course Progress</div>
          <div className="prog-ring-wrap">
            <svg width="76" height="76" viewBox="0 0 76 76">
              <circle cx="38" cy="38" r="30" fill="none" stroke="#e5e7eb" strokeWidth="6" />
              <circle cx="38" cy="38" r="30" fill="none" stroke="#4f46e5" strokeWidth="6" strokeDasharray="188.5" strokeDashoffset="47" strokeLinecap="round" />
            </svg>
            <div className="pr-text">
              <div className="pr-pct">75%</div>
              <div className="pr-label">Complete</div>
            </div>
          </div>
          <h5 style={{ marginTop: '.5rem' }}>Web Dev Course</h5>
          <p>Keep going! 🔥</p>
        </div>

        {/* Courses Card */}
        <div className="fc fc-courses">
          <div className="fcc-header">
            <span className="fcc-title">My Courses</span>
            <i className="ph ph-dots-three" style={{ color: 'var(--text-gray)' }}></i>
          </div>
          <div className="cl-item">
            <div className="cl-icon cli-blue">&lt;/&gt;</div>
            <div className="cl-info">
              <div className="cl-name">Web Development</div>
              <div className="cl-pct">45% Completed</div>
              <div className="cl-bar"><div className="cl-bar-fill" style={{ width: '45%' }}></div></div>
            </div>
          </div>
          <div className="cl-item">
            <div className="cl-icon cli-pink">Py</div>
            <div className="cl-info">
              <div className="cl-name">Python Automation</div>
              <div className="cl-pct">80% Completed</div>
              <div className="cl-bar"><div className="cl-bar-fill" style={{ width: '80%' }}></div></div>
            </div>
          </div>
          <a href="#" className="cl-viewall">View My Dashboard</a>
        </div>

        {/* Quiz Card */}
        <div className="fc fc-quiz">
          <div className="quiz-trophy"><i className="ph-fill ph-trophy"></i></div>
          <div className="quiz-score">92%</div>
          <div className="quiz-label">Average Quiz Score</div>
          <div className="quiz-badge"><i className="ph-fill ph-check"></i> Top 5% Student</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;