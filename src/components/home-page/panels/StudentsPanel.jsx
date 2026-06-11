import React, { useState } from 'react';
import { STUDENTS } from '../data';

export default function StudentsPanel() {
  const [search, setSearch] = useState('');

  const filteredStudents = search
    ? STUDENTS.filter(s => s.name.toLowerCase().includes(search.toLowerCase()) || s.email.toLowerCase().includes(search.toLowerCase()))
    : STUDENTS;

  return (
    <div className="panel active" id="panel-students">
      <div className="panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div className="heading-row"><h2>👥 Student Access Hub</h2></div>
        <div className="search-bar-field">
          <input 
            type="text" 
            placeholder="Search by name or email…" 
            value={search} 
            onChange={e => setSearch(e.target.value)} 
          />
          <button><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div className="student-grid scroll-y" style={{ flex: 1 }}>
          {filteredStudents.map((s, i) => (
            <div key={i} className="student-card">
              <div className="student-head">
                <div className="student-avatar">{s.avatar}</div>
                <div>
                  <div className="student-name">{s.name}</div>
                  <div className="student-email">{s.email}</div>
                </div>
              </div>
              <div className="access-tags">
                {s.courses.map((c, j) => (
                  <span key={j} className="access-tag allowed"><i className="fa-solid fa-unlock"></i>{c}</span>
                ))}
                {s.locked.map((c, j) => (
                  <span key={j} className="access-tag locked"><i className="fa-solid fa-lock"></i>{c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
