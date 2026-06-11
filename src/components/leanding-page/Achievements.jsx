import React from 'react';

function Achievements() {
  return (
    <section className="achievements container reveal">
      <div className="section-eyebrow"><i className="ph-fill ph-chart-line-up"></i> Milestones</div>
      <h2 className="section-title">Our Students' <span className="hl">Achievements</span></h2>
      <p className="section-sub center">Real outcomes from learners who started exactly where you are today.</p>
      <div className="achv-grid">
        <div className="achv-card">
          <div className="achv-num">12K+</div>
          <div className="achv-title">Jobs Landed</div>
          <div className="achv-desc">Graduates who found roles after completing our career tracks.</div>
          <div className="achv-ico"><i className="ph-fill ph-briefcase"></i></div>
        </div>
        <div className="achv-card">
          <div className="achv-num">25K+</div>
          <div className="achv-title">Projects Built</div>
          <div className="achv-desc">Hands-on projects published to portfolios and GitHub.</div>
          <div className="achv-ico"><i className="ph-fill ph-code"></i></div>
        </div>
        <div className="achv-card">
          <div className="achv-num">8K+</div>
          <div className="achv-title">Certificates Issued</div>
          <div className="achv-desc">Verified certificates awarded to learners showing mastery.</div>
          <div className="achv-ico"><i className="ph-fill ph-check-circle"></i></div>
        </div>
        <div className="achv-card">
          <div className="achv-num">95%</div>
          <div className="achv-title">Avg Course Completion</div>
          <div className="achv-desc">High completion rates across our most popular courses.</div>
          <div className="achv-ico"><i className="ph-fill ph-star"></i></div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;