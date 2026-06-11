import React from 'react';

function PopularCourses() {
  const courses = [
    { title: 'Web Development', desc: 'HTML, CSS, JavaScript & modern frameworks', img: 'https://www.cybher.org/wp-content/uploads/2023/08/web-dev.jpg', lvl: 'lv-beg', lvlTxt: 'Beginner', dur: '12h 45m', pillColor: '#3b82f6', pillText: '</>', rating: '4.8 (2.3k)', avatars: [1, 2, 3] },
    { title: 'Python Programming', desc: 'Master Python from basics to advanced concepts', img: 'https://4kwallpapers.com/images/wallpapers/python-programming-5120x2880-16102.jpg', lvl: 'lv-int', lvlTxt: 'Intermediate', dur: '10h 30m', pillColor: '#f59e0b', pillText: 'Py', rating: '4.7 (1.8k)', avatars: [4, 5, 6] },
    { title: 'UI/UX Design Masterclass', desc: 'Design stunning user interfaces and prototypes', img: 'https://hedza.com/wp-content/uploads/2023/08/ux-ui-design-scaled.jpg', lvl: 'lv-adv', lvlTxt: 'Advanced', dur: '15h 20m', pillColor: '#ec4899', pillText: 'UI', rating: '4.9 (3.1k)', avatars: [7, 8, 9] },
    { title: 'Data Science & Analytics', desc: 'Analyze complex statistics and machine data models', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80', lvl: 'lv-int', lvlTxt: 'Intermediate', dur: '18h 15m', pillColor: '#10b981', pillText: 'DS', rating: '4.6 (1.5k)', avatars: [10, 11, 12] },
    { title: 'Cybersecurity Essentials', desc: 'Protect system parameters and digital assets', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80', lvl: 'lv-adv', lvlTxt: 'Advanced', dur: '14h 00m', pillColor: '#ef4444', pillText: 'Sec', rating: '4.9 (2.0k)', avatars: [13, 14, 15] }
  ];

  return (
    <section id="courses" className="courses-section container reveal">
      <div className="courses-header-row">
        <div>
          <div className="section-eyebrow"><i className="ph-fill ph-books"></i> Core Tracks</div>
          <h2 className="section-title">Explore Popular <span className="hl">Courses</span></h2>
          <p className="section-sub">Upgrade your engineering capabilities with our highly rated curriculums.</p>
        </div>
      </div>

      <div className="courses-grid">
        {courses.map((c, i) => (
          <div className="course-card" key={i}>
            <div className="cc-thumb" style={{ background: 'linear-gradient(135deg,#0f172a,#1e1b4b)' }}>
              <img src={c.img} alt={c.title} />
              <div className={`cc-level ${c.lvl}`}>{c.lvlTxt}</div>
              <div className="cc-dur"><i className="ph-fill ph-play"></i> {c.dur}</div>
              <div className="cc-icon-pill" style={{ color: c.pillColor }}>{c.pillText}</div>
            </div>
            <div className="cc-body">
              <div className="cc-name">{c.title}</div>
              <div className="cc-desc">{c.desc}</div>
              <div className="cc-footer">
                <div className="cc-avatars">
                  {c.avatars.map((av) => (
                    <img key={av} src={`https://i.pravatar.cc/100?img=${av}`} alt="Avatar" />
                  ))}
                </div>
                <div className="cc-rating"><i className="ph-fill ph-star"></i> {c.rating}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a href="#" className="view-all-btn">View All Courses <i className="ph-bold ph-arrow-right"></i></a>
    </section>
  );
}

export default PopularCourses;