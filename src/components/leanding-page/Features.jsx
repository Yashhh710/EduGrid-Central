import React from 'react';

function Features({ onOpenLogin }) {
  const featureItems = [
    { num: '01', icon: 'ph-fill ph-video-camera', class: 'fi-1', title: 'Flawless Video Hosting', text: 'Upload and stream high-definition course content without buffers. Includes automated fallback safeguards for video playback.' },
    { num: '02', icon: 'ph-fill ph-clock-counter-clockwise', class: 'fi-2', title: 'Video Progress Tracker', text: 'We remember exactly where you left off. Jump back, rewind, or skip forward — seamless learning guaranteed.' },
    { num: '03', icon: 'ph-fill ph-list-checks', class: 'fi-3', title: 'Guided Quiz Creator', text: 'Create quizzes in minutes with multiple-choice questions, custom layouts, and automatic answer saving.' },
    { num: '04', icon: 'ph-fill ph-table', class: 'fi-4', title: 'Lag-Free Gradebook', text: 'View all student grades and milestones in a fast, scrollable table that never slows you down.' },
    { num: '05', icon: 'ph-fill ph-sort-descending', class: 'fi-5', title: 'Smart Grade Sorter', text: 'Rank and filter student scores by course, category, or performance level in just a few clicks.' },
    { num: '06', icon: 'ph-fill ph-shield-check', class: 'fi-6', title: 'Student Access Hub', text: 'Control what students can access based on enrollment. Secure, personalized, and well-organized.' },
    { num: '07', icon: 'ph-fill ph-warning', class: 'fi-7', title: 'Video Error Safety', text: 'If a video fails to load, we show a clear helpful message — no blank screens, always informed.' },
    { num: '08', icon: 'ph-fill ph-lightning', class: 'fi-8', title: 'High-Performance Grid', text: 'An advanced layout architecture optimized for ultra-smooth responsiveness across mobile, desktop, and tablet views.' }
  ];

  return (
    <section id="features" className="features-section container reveal">
      <div className="section-eyebrow"><i className="ph-fill ph-rocket"></i> Features Toolkit</div>
      <h2 class="section-title">Everything You Need In One <span class="hl">Powerhouse Platform</span></h2>
      <p class="section-sub center">A complete custom architecture designed to handle deep educational demands cleanly.</p>

      <div className="features-grid">
        {featureItems.map((f, i) => (
          <div className="feat-card reveal" key={i}>
            <div className="feat-num">{f.num}</div>
            <div className={`feat-ico ${f.class}`}><i className={f.icon}></i></div>
            <h4>{f.title}</h4>
            <p>{f.text}</p>
            <a href="#" className="feat-link">Learn more <i className="ph-bold ph-arrow-right"></i></a>
          </div>
        ))}
      </div>

      <div className="cta-strip">
        <div className="cta-strip-left">
          <div className="cta-ico"><i className="ph-fill ph-lightning"></i></div>
          <div style={{ textAlign: 'left' }}>
            <h3>Ready to Supercharge Your Platform?</h3>
            <p>Deploy our advanced system architecture in minutes with custom workflows.</p>
          </div>
        </div>
        <div className="cta-strip-right">
          <button type="button" className="btn btn-white" onClick={onOpenLogin}>Deploy System Now</button>
          <a href="#" className="btn btn-white-ghost">Talk to Experts</a>
        </div>
      </div>
    </section>
  );
}

export default Features;