import React, { useEffect, useMemo, useState } from 'react';
import { COURSE_SECTIONS } from '../data';

export default function CoursesPanel({ searchQuery, onVideoClick }) {
  const [activeSection, setActiveSection] = useState('All');
  const sectionsToRender = useMemo(() => {
    if (!searchQuery) return COURSE_SECTIONS;
    const lowerQuery = searchQuery.toLowerCase();
    
    return COURSE_SECTIONS.map(section => ({
      ...section,
      courses: section.courses.filter(c => 
        c.title.toLowerCase().includes(lowerQuery) ||
        (c.desc && c.desc.toLowerCase().includes(lowerQuery)) ||
        (c.cat && c.cat.toLowerCase().includes(lowerQuery))
      )
    })).filter(section => section.courses.length > 0);
  }, [searchQuery]);

  const sectionLabels = useMemo(() => [
    { label: 'All', count: sectionsToRender.reduce((sum, section) => sum + section.courses.length, 0) },
    ...sectionsToRender.map(section => ({ label: section.cat, count: section.courses.length }))
  ], [sectionsToRender]);

  const visibleSections = useMemo(() => {
    if (activeSection === 'All') return sectionsToRender;
    return sectionsToRender.filter(section => section.cat === activeSection);
  }, [activeSection, sectionsToRender]);

  useEffect(() => {
    if (activeSection !== 'All' && !sectionsToRender.some(section => section.cat === activeSection)) {
      setActiveSection('All');
    }
  }, [activeSection, sectionsToRender]);

  return (
    <div className="panel active" id="panel-courses">
      <div className="panel-body">
        <div className="heading-row"><h2>📚 All Courses</h2></div>
        <div className="section-slider">
          {sectionLabels.map((section, idx) => (
            <button
              key={idx}
              type="button"
              className={`section-slide${activeSection === section.label ? ' active' : ''}`}
              onClick={() => setActiveSection(section.label)}
            >
              <div className="section-slide-label">{section.label}</div>
              <div className="section-slide-count">{section.count} courses</div>
            </button>
          ))}
        </div>
        <div id="courseSections">
          {visibleSections.length === 0 ? (
            <div style={{ padding: '24px', color: 'var(--muted)' }}>No courses found for "{searchQuery}".</div>
          ) : (
            visibleSections.map((section, idx) => (
              <div key={idx} className="course-section">
                <div className="section-label">{section.cat}</div>
                <div className="cards-row">
                  {section.courses.map((c, i) => (
                    <div key={i} className="course-card" onClick={() => onVideoClick && onVideoClick(c)}>
                      <div className="card-thumb">
                        {c.image ? (
                          <img src={c.image} alt={c.title} loading="lazy" />
                        ) : (
                          <div className="card-thumb-fallback" style={{ background: c.bg || '#e0f2fe' }}>{c.icon}</div>
                        )}
                        <span className={`card-badge ${c.level === 'Intermediate' ? 'intermediate' : c.level === 'Advanced' ? 'advanced' : ''}`}>
                          {c.level || 'Beginner'}
                        </span>
                        <span className="card-duration">
                          <i className="fa-solid fa-play" style={{ fontSize: '8px' }}></i>
                          {c.videoDuration || '1h'}
                        </span>
                      </div>
                      <div className="card-body">
                        <div className="card-cat-icon" style={{ background: c.bg || '#e0f2fe' }}>{c.icon}</div>
                        <div className="card-title">{c.title}</div>
                        <div className="card-desc">{c.desc || c.cat}</div>
                        <div className="card-footer">
                          <div className="card-avatars">
                            <div className="card-avatar" style={{ background: '#2563eb', zIndex: 3 }}></div>
                            <div className="card-avatar" style={{ background: '#7c3aed', zIndex: 2 }}></div>
                          </div>
                          <div className="card-rating">
                            <i className="fa-solid fa-star"></i>{c.rating || 4.5}
                            <span>({c.students >= 1000 ? (c.students / 1000).toFixed(1) + 'k' : c.students})</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}