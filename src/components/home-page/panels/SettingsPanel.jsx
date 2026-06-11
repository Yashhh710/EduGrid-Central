import React, { useState } from 'react';
import { GRADEBOOK_ROWS } from '../data';

export default function SettingsPanel() {
  const [activeTab, setActiveTab] = useState('subtitle');
  
  // Subtitle states
  const [subSize, setSubSize] = useState(16);
  const [subFont, setSubFont] = useState('sans-serif');
  const [subColor, setSubColor] = useState('#ffffff');
  const [subBg, setSubBg] = useState('rgba(0,0,0,0.7)');
  const [subPos, setSubPos] = useState('bottom');

  // Sorter states
  const [sortCat, setSortCat] = useState('');
  const [sortOrd, setSortOrd] = useState('desc');

  // Video error states
  const [vidErrors, setVidErrors] = useState({ v1: false, v2: false });

  let sortedGrades = sortCat ? GRADEBOOK_ROWS.filter(r => r.cat === sortCat) : [...GRADEBOOK_ROWS];
  sortedGrades.sort((a, b) => sortOrd === 'desc' ? b.quiz - a.quiz : a.quiz - b.quiz);

  return (
    <div className="panel active" id="panel-settings">
      <div className="panel-body" style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        <div className="heading-row"><h2>⚙️ Settings</h2></div>
        <div className="tab-bar" style={{ marginBottom: '18px' }}>
          <span className={`tab-pill ${activeTab === 'subtitle' ? 'active' : ''}`} onClick={() => setActiveTab('subtitle')}>Subtitle Customizer</span>
          <span className={`tab-pill ${activeTab === 'sorter' ? 'active' : ''}`} onClick={() => setActiveTab('sorter')}>Grade Sorter</span>
          <span className={`tab-pill ${activeTab === 'video-error' ? 'active' : ''}`} onClick={() => setActiveTab('video-error')}>Video Safety</span>
        </div>

        {activeTab === 'subtitle' && (
          <div className="scroll-y" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div className="sub-preview">
              <div className="sub-video-bg"><i className="fa-solid fa-play" style={{ fontSize: '38px', color: 'rgba(255,255,255,0.2)' }}></i></div>
              <div className="sub-display" style={{ bottom: subPos === 'bottom' ? 0 : 'auto', top: subPos === 'top' ? 0 : 'auto' }}>
                <span className="sub-text" style={{ fontSize: `${subSize}px`, fontFamily: subFont, color: subColor, background: subBg }}>
                  The pen tool creates precise vector paths…
                </span>
              </div>
            </div>
            <div className="sub-controls">
              <h4>Customize Subtitles</h4>
              <div className="ctrl-group">
                <label>Font Size: <span>{subSize}px</span></label>
                <input type="range" min="10" max="28" value={subSize} onChange={e => setSubSize(Number(e.target.value))} />
              </div>
              <div className="ctrl-group">
                <label>Font Style</label>
                <div className="chip-row">
                  <span className={`chip ${subFont === 'sans-serif' ? 'active' : ''}`} onClick={() => setSubFont('sans-serif')}>Sans</span>
                  <span className={`chip ${subFont === 'Georgia,serif' ? 'active' : ''}`} onClick={() => setSubFont('Georgia,serif')} style={{ fontFamily: 'Georgia' }}>Serif</span>
                  <span className={`chip ${subFont === 'monospace' ? 'active' : ''}`} onClick={() => setSubFont('monospace')} style={{ fontFamily: 'monospace' }}>Mono</span>
                </div>
              </div>
              <div className="ctrl-group">
                <label>Text Color</label>
                <div className="chip-row">
                  {['#ffffff', '#f9e547', '#60e8a0', '#f87171'].map(c => (
                    <div key={c} className={`color-dot ${subColor === c ? 'active' : ''}`} style={{ background: c }} onClick={() => setSubColor(c)}></div>
                  ))}
                </div>
              </div>
              <div className="ctrl-group">
                <label>Background</label>
                <div className="chip-row">
                  <span className={`chip ${subBg === 'rgba(0,0,0,0.7)' ? 'active' : ''}`} onClick={() => setSubBg('rgba(0,0,0,0.7)')}>Dark</span>
                  <span className={`chip ${subBg === 'rgba(37,99,235,0.8)' ? 'active' : ''}`} onClick={() => setSubBg('rgba(37,99,235,0.8)')}>Blue</span>
                  <span className={`chip ${subBg === 'transparent' ? 'active' : ''}`} onClick={() => setSubBg('transparent')}>None</span>
                </div>
              </div>
              <div className="ctrl-group">
                <label>Position</label>
                <div className="chip-row">
                  <span className={`chip ${subPos === 'top' ? 'active' : ''}`} onClick={() => setSubPos('top')}>Top</span>
                  <span className={`chip ${subPos === 'bottom' ? 'active' : ''}`} onClick={() => setSubPos('bottom')}>Bottom</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'sorter' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1, overflow: 'hidden' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <select style={{ flex: 1 }} value={sortCat} onChange={e => setSortCat(e.target.value)}>
                <option value="">All Categories</option>
                <option value="Development">Development</option>
                <option value="AI">AI</option>
                <option value="Design">Design</option>
                <option value="Business">Business</option>
              </select>
              <select style={{ flex: 1 }} value={sortOrd} onChange={e => setSortOrd(e.target.value)}>
                <option value="desc">Highest First</option>
                <option value="asc">Lowest First</option>
              </select>
            </div>
            <div className="scroll-y" style={{ flex: 1 }}>
              {sortedGrades.map((r, i) => (
                <div key={i} className="sorter-row">
                  <div className="sorter-rank">{i + 1}</div>
                  <div className="sorter-info">
                    <div className="sorter-name">{r.name}</div>
                    <div className="sorter-course">{r.course}</div>
                  </div>
                  <div className="sorter-score">{r.quiz}%</div>
                  <div className="cat-tag">{r.cat}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'video-error' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', overflowY: 'auto', flex: 1 }}>
            <p style={{ fontSize: '12px', color: 'var(--muted)' }}>Toggle error state to see fallback text sheet replace a broken video.</p>
            {[
              { id: 'v1', title: '🎬 Full Stack Web Dev', concepts: ['HTML, CSS, JS form the foundation of the web.', 'React handles dynamic front-end UIs efficiently.', 'Node.js + Express powers the backend API layer.'] },
              { id: 'v2', title: '🤖 AI & Prompt Engineering', concepts: ['Prompts are instructions given to language models.', 'Temperature controls creativity in output.'] }
            ].map(v => (
              <div key={v.id} className="video-slot">
                <div className="video-slot-head">
                  <h4>{v.title}</h4>
                  <button className="err-toggle" onClick={() => setVidErrors({ ...vidErrors, [v.id]: !vidErrors[v.id] })}>
                    {vidErrors[v.id] ? 'Restore Video' : 'Simulate Error'}
                  </button>
                </div>
                <div className="video-vp">
                  {!vidErrors[v.id] ? (
                    <div className="video-ok-msg"><i className="fa-solid fa-play-circle"></i><span>Video OK</span></div>
                  ) : (
                    <div className="err-fallback show">
                      <h3>📄 {v.title}</h3>
                      <p>Video could not load. Key concepts:</p>
                      {v.concepts.map((c, i) => (
                        <div key={i} className="kp-item"><i className="fa-solid fa-check-circle"></i><span>{c}</span></div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="err-status">
                  {vidErrors[v.id] ? <span className="err">● Error — Text fallback active</span> : <span className="ok">● Video OK</span>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}