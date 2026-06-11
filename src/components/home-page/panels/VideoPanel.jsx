import React, { useState, useEffect } from 'react';
import { SUBTITLES } from '../data';

export default function VideoPanel({ onBack }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showSubtitles, setShowSubtitles] = useState(false);
  const [lastSkipPos, setLastSkipPos] = useState(null);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(p => {
          if (p >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return p + 0.3;
        });
      }, 150);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  
  const seekBy = (amount) => setProgress(p => Math.max(0, Math.min(100, p + amount)));
  
  const handleTrackClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    setProgress(Math.max(0, Math.min(100, (clickX / rect.width) * 100)));
  };

  const jumpTo = (percent) => setProgress(percent);
  
  const undoSkip = () => {
    if (lastSkipPos !== null) setProgress(lastSkipPos);
  };
  
  const saveSpot = () => setLastSkipPos(progress);

  const currentSubtitle = SUBTITLES.slice().reverse().find(s => progress >= s.at);

  return (
    <div className="panel active" id="panel-video">
      <div className="panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div className="heading-row">
          <h2>🎬 Now Playing</h2>
          <button className="chip active" onClick={onBack} style={{ cursor: 'pointer' }}>
            <i className="fa-solid fa-arrow-left"></i> Back
          </button>
        </div>
        
        <div className="video-player-wrap">
          <div style={{ height: '200px', background: 'linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className="fa-solid fa-play" style={{ fontSize: '44px', color: 'rgba(255,255,255,0.2)' }}></i>
          </div>
          <div className="vp-overlay">
            <div className="vp-title-bar">
              <span>Loading...</span>
              <span className="vp-time">
                {Math.floor(progress)}:{(Math.floor(progress * 60) % 60).toString().padStart(2, '0')} / 01:30:00
              </span>
            </div>
            
            <div className="progress-track" onClick={handleTrackClick}>
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
              <div className="progress-thumb" style={{ left: `${progress}%` }}></div>
            </div>
            
            <div className="vp-controls">
              <button className="vc-btn" onClick={() => seekBy(-5)}><i className="fa-solid fa-rotate-left"></i></button>
              <button className="vc-btn vc-play" onClick={togglePlay}>
                <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
              </button>
              <button className="vc-btn" onClick={() => seekBy(5)}><i className="fa-solid fa-rotate-right"></i></button>
              <button className="vc-btn" onClick={() => setShowSubtitles(!showSubtitles)}>
                <i className="fa-solid fa-closed-captioning"></i>
              </button>
              <a href="#" target="_blank" rel="noreferrer" className="vc-btn" style={{ textDecoration: 'none' }}>
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
            
            {showSubtitles && currentSubtitle && (
              <div className="sub-bar" style={{ display: 'block' }}>{currentSubtitle.text}</div>
            )}
          </div>
        </div>

        <div className="checkpoint-section">
          <h4><i className="fa-solid fa-clock-rotate-left" style={{ color: 'var(--accent)', marginRight: '6px' }}></i>Checkpoints</h4>
          <div className="cp-list">
            {[
              { t: '00:00', label: 'Introduction', p: 0 },
              { t: '15:20', label: 'Core Concepts', p: 20 },
              { t: '32:45', label: 'Hands-on Practice', p: 40 },
              { t: '52:10', label: 'Advanced Topics', p: 60 },
              { t: '1:15:00', label: 'Project Walkthrough', p: 80 }
            ].map((cp, i) => (
              <div key={i} className="cp-item" onClick={() => jumpTo(cp.p)}>
                <span className="cp-time">{cp.t}</span>
                <span className="cp-label">{cp.label}</span>
                <span className="cp-jump">Jump →</span>
              </div>
            ))}
          </div>
          <div className="cp-actions">
            <button className="cp-btn" onClick={undoSkip}><i className="fa-solid fa-undo"></i> Undo Skip</button>
            <button className="cp-btn" onClick={saveSpot}><i className="fa-solid fa-bookmark"></i> Save Spot</button>
          </div>
        </div>
      </div>
    </div>
  );
}
