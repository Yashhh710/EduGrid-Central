import React from 'react';
import { RECENTLY_VIEWED } from '../data';

export default function RightPanel() {
  return (
    <div className="right-panel">
      <div className="rp-stats">
        <div className="stat-box">
          <div className="icon">🎓</div>
          <div className="num">6</div>
          <div className="lbl">Courses completed</div>
        </div>
        <div className="stat-box">
          <div className="icon">⏳</div>
          <div className="num">4</div>
          <div className="lbl">In progress</div>
        </div>
      </div>

      <div className="rp-section">
        <div className="rp-title">Your Statistics</div>
        <div className="graph-area">
          <svg className="graph-svg" viewBox="0 0 300 110" preserveAspectRatio="none">
            <defs>
              <linearGradient id="gfill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" stopOpacity=".15"/>
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M15 110 C35 90,45 75,63 75 C80 75,95 56,111 56 C130 56,140 85,159 85 C180 85,190 15,207 15 C225 15,235 42,252 42 C270 42,275 64,285 64" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M15 110 C35 90,45 75,63 75 C80 75,95 56,111 56 C130 56,140 85,159 85 C180 85,190 15,207 15 C225 15,235 42,252 42 C270 42,275 64,285 64 L285 110 L15 110 Z" fill="url(#gfill)"/>
            <circle cx="63" cy="75" r="3.5" fill="#2563eb" stroke="white" strokeWidth="1.5"/>
            <circle cx="111" cy="56" r="3.5" fill="#2563eb" stroke="white" strokeWidth="1.5"/>
            <circle cx="159" cy="85" r="3.5" fill="#2563eb" stroke="white" strokeWidth="1.5"/>
            <circle cx="207" cy="15" r="3.5" fill="#2563eb" stroke="white" strokeWidth="1.5"/>
            <circle cx="252" cy="42" r="3.5" fill="#2563eb" stroke="white" strokeWidth="1.5"/>
          </svg>
        </div>
        <div className="graph-days">
          <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
        </div>
      </div>

      <div className="rp-section">
        <div className="rp-title">Weekly Streak 🔥</div>
        <div className="streak-bar">
          <div className="streak-dot done">M</div>
          <div className="streak-dot done">T</div>
          <div className="streak-dot done">W</div>
          <div className="streak-dot done">T</div>
          <div className="streak-dot today">F</div>
          <div className="streak-dot">S</div>
          <div className="streak-dot">S</div>
        </div>
      </div>

      <div className="rp-section">
        <div className="rp-title">Recently Viewed</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {RECENTLY_VIEWED.map(c => (
            <div key={c.title} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px', background: 'var(--bg)', borderRadius: '10px', border: '1px solid var(--border)', cursor: 'pointer' }}>
              <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: c.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>
                {c.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '11px', fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.title}</div>
                <div style={{ fontSize: '10px', color: 'var(--muted)' }}>{c.progress}% complete</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="premium-card">
        <h4>Learn even more! 🚀</h4>
        <p>Unlock premium features for just ₹799/month.</p>
        <button className="btn-premium">Go Premium</button>
      </div>
    </div>
  );
}
