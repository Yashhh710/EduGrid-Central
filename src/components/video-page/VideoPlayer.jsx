import React, { useEffect, useState } from 'react';
import './video-player.css';

export default function VideoPlayer() {
  const [query, setQuery] = useState({});
  const [ccOpen, setCcOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const obj = {};
    for (const [k, v] of params.entries()) obj[k] = v;
    setQuery(obj);
  }, []);

  useEffect(() => {
    if (query.v) {
      const player = document.getElementById('player-iframe');
      if (player) {
        const start = query.start || query.t || '';
        const startPart = start ? `&start=${encodeURIComponent(start)}` : '';
        player.src = `https://www.youtube.com/embed/${encodeURIComponent(query.v)}?rel=0&autoplay=1&cc_load_policy=1&cc_lang_pref=en${startPart}`;
      }
    }
  }, [query]);

  return (
    <div className="vp-root">
      <div className="vp-header">
        <div className="vp-left">
          <button className="vp-close" onClick={() => window.history.back()}>← Back</button>
          <div className="vp-title">{query.title ? decodeURIComponent(query.title) : 'Video'}</div>
        </div>
      </div>

      <iframe id="player-iframe" title={query.title || 'video-player'} className="vp-iframe" src="about:blank" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowFullScreen />

      <div className={`vp-cc-panel ${ccOpen ? 'show' : ''}`} aria-hidden={!ccOpen}>
        <div className="vp-cc-head">
          <h3>Subtitles</h3>
          <button className="vp-close" onClick={() => setCcOpen(false)}>✕</button>
        </div>
        <div className="vp-cc-list">
          <div className="vp-cc-item">Native captions are enabled in the video player if available.</div>
        </div>
      </div>

      <div className="vp-badge">
        <div className="vp-mark">EG</div>
        <div className="vp-text"><span>Powered by</span><strong>EduGrid</strong></div>
      </div>
    </div>
  );
}
