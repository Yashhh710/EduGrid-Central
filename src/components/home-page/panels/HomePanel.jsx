import React, { useState } from 'react';
import Hero from './hero';
import { CONTINUE_LEARNING, POPULAR_COURSES } from '../data';

export default function HomePanel({ userName, courseProgress, onVideoClick }) {
  const [selectedContinue, setSelectedContinue] = useState(null);

  const handleContinueClick = (course) => {
    setSelectedContinue(course.title);
    onVideoClick(course);
  };

  return (
    <div className="panel active" id="panel-home">
      <div className="panel-body">
        <Hero userName={userName} />

        <div className="section-label">📖 Continue Learning <a href="#">View all →</a></div>
        <div className="continue-row">
          {CONTINUE_LEARNING.map((c, i) => {
            const saved = courseProgress?.[c.title];
            const progressValue = saved ?? c.progress ?? 0;
            const isActive = selectedContinue === c.title;
            return (
              <div
                key={i}
                className={`cl-card${isActive ? ' active' : ''}`}
                onClick={() => handleContinueClick(c)}
                style={isActive ? { borderColor: c.bg } : undefined}
              >
                <div className="cl-thumb" style={{ background: c.bg }}>{c.icon}</div>
                <div className="cl-info">
                  <div className="cl-title">{c.title}</div>
                  <div className="cl-sub">⭐ {c.rating} · {c.videoDuration}</div>
                  <div className="cl-bar-wrap">
                    <div
                      className="cl-bar"
                      style={{
                        width: `${progressValue}%`,
                        background: isActive ? c.bg : 'rgba(37, 99, 235, 0.18)'
                      }}
                    ></div>
                  </div>
                </div>
                <div className="cl-pct" style={{ color: isActive ? c.bg : undefined }}>{progressValue}%</div>
                <button className="cl-btn">▶ Continue</button>
              </div>
            );
          })}
        </div>

        <div className="section-label">🔥 Popular Courses <a href="#">See more →</a></div>
        <div className="cards-row" id="popularGrid">
          {POPULAR_COURSES.slice(0, 4).map((c, i) => (
            <div key={i} className="course-card" onClick={() => onVideoClick(c)}>
              <div className="card-thumb">
                <img src={c.image} alt={c.title} loading="lazy" />
                <span className={`card-badge ${c.level === 'Intermediate' ? 'intermediate' : c.level === 'Advanced' ? 'advanced' : ''}`}>
                  {c.level || 'Beginner'}
                </span>
                <span className="card-duration">
                  <i className="fa-solid fa-play" style={{ fontSize: '8px' }}></i>
                  {c.videoDuration}
                </span>
              </div>
              <div className="card-body">
                <div className="card-cat-icon" style={{ background: c.bg }}>{c.icon}</div>
                <div className="card-title">{c.title}</div>
                <div className="card-desc">{c.desc || c.cat}</div>
                <div className="card-footer">
                  <div className="card-avatars">
                    <div className="card-avatar" style={{ background: '#2563eb', zIndex: 3 }}></div>
                    <div className="card-avatar" style={{ background: '#7c3aed', zIndex: 2 }}></div>
                    <div className="card-avatar" style={{ background: '#10b981', zIndex: 1 }}></div>
                  </div>
                  <div className="card-rating">
                    <i className="fa-solid fa-star"></i>{c.rating}
                    <span>({c.students >= 1000 ? (c.students / 1000).toFixed(1) + 'k' : c.students})</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
