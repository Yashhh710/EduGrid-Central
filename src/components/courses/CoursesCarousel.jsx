import React, { useRef } from 'react';
import styles from './CoursesCarousel.module.css';
import { openPlayer } from '../../utils/openPlayer';

const CATEGORY_ORDER = [
  'Development',
  'Data Science',
  'AI & Machine Learning',
  'Cyber Security',
  'Cloud Computing',
  'Mobile Development',
  'UI/UX Design',
  'Business & Marketing',
];

function groupByCategory(courses) {
  const map = {};
  courses.forEach(c => {
    const cat = c.category || 'Uncategorized';
    if (!map[cat]) map[cat] = [];
    map[cat].push(c);
  });
  return map;
}

const Arrow = ({ dir = 'left', onClick }) => (
  <button aria-label={dir === 'left' ? 'Scroll left' : 'Scroll right'} onClick={onClick} className={`${styles.arrowBtn} ${dir === 'left' ? styles.arrowLeft : styles.arrowRight}`}>
    {dir === 'left' ? '◀' : '▶'}
  </button>
);

const CourseCard = ({ c }) => (
  <article className={styles.card} role="article" onClick={() => openPlayer({ v: c.videoId || c.video || c.id, title: c.title, desc: c.desc })} style={{ cursor: 'pointer' }}>
    <div className={styles.thumbWrap}>
      <img src={c.image || 'https://via.placeholder.com/640x360?text=Course'} alt={c.title} className={styles.thumb} />
      <div className={`${styles.badge} ${styles.level}`}>{c.level || 'Beginner'}</div>
      <div className={`${styles.badge} ${styles.duration}`} style={{ right: 12, left: 'auto' }}>{c.videoDuration || '—'}</div>
    </div>
    <div className={styles.body}>
      <div>
        <div className={styles.courseTitle} title={c.title}>{c.title}</div>
        <div className={styles.desc}>{c.desc || c.cat || ''}</div>
      </div>
      <div className={styles.meta}>
        <div className={styles.rating}><svg width="14" height="14" viewBox="0 0 24 24" fill="#7c3aed" xmlns="http://www.w3.org/2000/svg"><path d="M12 .587l3.668 7.431L23 9.748l-5.5 5.356L18.335 23 12 19.77 5.665 23 6.5 15.104 1 9.748l7.332-1.73z"/></svg>{c.rating || '4.8'}</div>
        <div className={styles.avatars}>
          {(c.instructors || []).slice(0,3).map((a,i)=> <img key={i} src={a} alt={`instr-${i}`} className={styles.avatar} />)}
        </div>
      </div>
    </div>
  </article>
);

export default function CoursesCarousel({ courses = [] }){
  const grouped = groupByCategory(courses);
  const rowRefs = useRef({});

  const onArrow = (cat, dir) => {
    const el = rowRefs.current[cat];
    if (!el) return;
    const card = el.querySelector('[class*="card"]');
    const gap = 24; // matches css
    const cardWidth = card ? card.offsetWidth : 320;
    const scrollAmount = cardWidth + gap;
    el.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className={styles.wrap}>
      {CATEGORY_ORDER.map((cat) => {
        const items = grouped[cat] || [];
        if (!items.length) return null; // skip empty categories
        return (
          <section key={cat} className={styles.category}>
            <div className={styles.header}>
              <h3 className={styles.title}>{cat}</h3>
              <button className={styles.viewAll} onClick={() => window.location.hash = `#/courses?cat=${encodeURIComponent(cat)}`}>
                View All →
              </button>
            </div>

            <div className={styles.rowWrap}>
              <div className={styles.arrows}>
                <Arrow dir="left" onClick={() => onArrow(cat, 'left')} />
                <Arrow dir="right" onClick={() => onArrow(cat, 'right')} />
              </div>
              <div className={styles.row} ref={el => rowRefs.current[cat] = el}>
                {items.map(c => <CourseCard key={c.id || c.title} c={c} />)}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
