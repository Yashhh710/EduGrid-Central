import React from 'react';
import mapImg from '../../assets/models/map.png';

function Impact({ onOpenLogin }) {
  return (
    <section id="impact" className="container reveal">
      <div className="impact-section">
        <img className="impact-map" src={mapImg} alt="Global map" />
        <div className="impact-blob"></div>
        <div>
          <div className="impact-badge">Our Global Impact</div>
          <h2 className="impact-title">Making Learning <br />Accessible <span className="hl">Worldwide</span></h2>
          <p className="impact-desc">
            We power robust dashboards and critical lecture systems for exceptional digital experiences around the globe, from solo learners to enterprise teams.
          </p>
          <div className="impact-feats">
            <div className="if-item">
              <div className="if-ico ifc-1"><i className="ph-fill ph-users-three"></i></div>
              <div className="if-t">
                <h5>Learn Anywhere</h5>
                <p>Access your courses<br />anytime, on any device.</p>
              </div>
            </div>
            <div className="if-item">
              <div className="if-ico ifc-2"><i className="ph-fill ph-chart-line-up"></i></div>
              <div className="if-t">
                <h5>Track Progress</h5>
                <p>Monitor learning and<br />achieve your goals.</p>
              </div>
            </div>
            <div className="if-item">
              <div className="if-ico ifc-3"><i className="ph-fill ph-trophy"></i></div>
              <div className="if-t">
                <h5>Earn Certificates</h5>
                <p>Boost your career<br />with verified credentials.</p>
              </div>
            </div>
          </div>
          <div className="impact-actions">
            <button type="button" className="btn btn-primary" onClick={onOpenLogin}>Join EduGrid Central <i className="ph-bold ph-arrow-right"></i></button>
            <a href="#" className="btn btn-outline-dark"><i className="ph-bold ph-play-circle"></i> Watch Demo</a>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card sc-1">
            <div className="stat-ico si-1"><i className="ph-fill ph-users"></i></div>
            <div className="stat-num">25K+</div>
            <div className="stat-title">Active Students</div>
            <div className="stat-desc">Growing every single day</div>
          </div>
          <div className="stat-card sc-2">
            <div className="stat-ico si-2"><i className="ph-fill ph-graduation-cap"></i></div>
            <div className="stat-num">1.2K+</div>
            <div className="stat-title">Courses</div>
            <div className="stat-desc">Across all domains</div>
          </div>
          <div className="stat-card sc-3">
            <div className="stat-ico si-3"><i className="ph-fill ph-user-focus"></i></div>
            <div className="stat-num">350+</div>
            <div className="stat-title">Expert Instructors</div>
            <div className="stat-desc">Industry professionals</div>
          </div>
          <div className="stat-card sc-4">
            <div className="stat-ico si-4"><i className="ph-fill ph-globe-hemisphere-west"></i></div>
            <div className="stat-num">80+</div>
            <div className="stat-title">Countries</div>
            <div className="stat-desc">Global learning community</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Impact;