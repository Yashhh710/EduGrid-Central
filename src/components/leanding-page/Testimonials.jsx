import React from 'react';

function Testimonials() {
  const list = [
    { tag: 'Web Dev', name: 'Sarah Jenkins', role: 'Frontend Engineer', img: '12', text: 'The granular access parameters and lag-free UI module transitions helped me structure production grade component layouts perfectly. Absolutely unmatched analytics.' },
    { tag: 'Data Science', name: 'David Chen', role: 'Machine Learning Engineer', img: '46', text: 'This dashboard functions beautifully. Watching rich multimedia lecture materials with the safety error handlers means zero downtime in workflow operations.' },
    { tag: 'Python Track', name: 'Carlos Rivera', role: 'Data Analyst', img: '33', text: 'Nothing comes close. The gradebook and structured lessons make it feel like a real classroom. Finished Python in 3 weeks and built my first ML model.' }
  ];

  return (
    <section className="testimonials container reveal">
      <div className="section-eyebrow"><i className="ph-fill ph-chat-circle-dots"></i> Student Stories</div>
      <h2 className="section-title">Loved by <span class="hl">Thousands</span> of Learners</h2>
      <p className="section-sub center">Don't take our word for it — hear what our students have to say.</p>
      
      <div className="testi-grid">
        {list.map((t, i) => (
          <div className="testi-card reveal" key={i}>
            <div className="testi-tag">{t.tag}</div>
            <div className="testi-stars">
              <i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
            </div>
            <p className="testi-quote">"{t.text}"</p>
            <div className="testi-user">
              <img src={`https://i.pravatar.cc/100?img=${t.img}`} className="testi-avatar" alt={t.name} />
              <div>
                <div className="testi-name">{t.name}</div>
                <div className="testi-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;