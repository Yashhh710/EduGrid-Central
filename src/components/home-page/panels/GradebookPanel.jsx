import React, { useState } from 'react';
import { GRADEBOOK_ROWS } from '../data';

function gradeLabel(score) {
  if (score >= 90) return <span className="grade-badge grade-a">A</span>;
  if (score >= 80) return <span className="grade-badge grade-b">B</span>;
  if (score >= 70) return <span className="grade-badge grade-c">C</span>;
  return <span className="grade-badge grade-d">D</span>;
}

export default function GradebookPanel() {
  const [filter, setFilter] = useState('');

  const rows = filter
    ? GRADEBOOK_ROWS.filter(r => r.course.includes(filter) || r.cat.includes(filter))
    : GRADEBOOK_ROWS;

  return (
    <div className="panel active" id="panel-gradebook">
      <div className="panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div className="heading-row">
          <h2>📊 Gradebook</h2>
          <select value={filter} onChange={e => setFilter(e.target.value)}>
            <option value="">All Courses</option>
            <option value="Full Stack">Full Stack</option>
            <option value="AI">AI</option>
            <option value="React">React</option>
            <option value="Python">Python</option>
            <option value="Design">Design</option>
          </select>
        </div>
        <div className="gb-wrap" style={{ flex: 1 }}>
          <table className="gb-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Course</th>
                <th>Progress</th>
                <th>Score</th>
                <th>Grade</th>
                <th>Milestone</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <td>{r.name}</td>
                  <td style={{ color: 'var(--muted)', fontSize: '11px' }}>{r.course}</td>
                  <td>
                    <span className="gb-bar-wrap">
                      <span className="gb-bar-fill" style={{ width: `${r.progress}%`, display: 'block' }}></span>
                    </span>
                    <span style={{ fontSize: '10px', color: 'var(--muted)', marginLeft: '4px' }}>{r.progress}%</span>
                  </td>
                  <td>{r.quiz}%</td>
                  <td>{gradeLabel(r.quiz)}</td>
                  <td>
                    {r.milestone ? <span className="milestone-tag">{r.milestone}</span> : <span style={{ color: '#ddd' }}>—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
