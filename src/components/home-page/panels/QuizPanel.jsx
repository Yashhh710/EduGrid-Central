import React, { useState } from 'react';

const QUIZ_QUESTIONS = [
  'Which of the following is NOT a front-end technology?',
  'What does REST stand for in API design?',
  'Which hook is used for side effects in React?'
];

export default function QuizPanel() {
  const [quizStep, setQuizStep] = useState(1);
  const [quizQ, setQuizQ] = useState(0);
  const [quizTitle, setQuizTitle] = useState('Full Stack Web Dev Quiz');
  const [quizCourse, setQuizCourse] = useState('Full Stack Web Development');
  const [quizTime, setQuizTime] = useState('15');
  const [quizPass, setQuizPass] = useState('70');

  const handleNext = () => {
    if (quizStep < 4) {
      setQuizStep(quizStep + 1);
    } else {
      alert('🎉 Quiz published!');
    }
  };

  const handlePrev = () => {
    if (quizStep > 1) setQuizStep(quizStep - 1);
  };

  return (
    <div className="panel active" id="panel-quiz">
      <div className="panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div className="heading-row"><h2>✏️ Quiz Creator</h2></div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '8px 0 10px' }}>
          <button className="cp-btn open-quiz-btn" onClick={() => window.open('https://quiz-blast-co.vercel.app/','_blank','noopener')}>
            Open Quiz
          </button>
        </div>
        
        <div className="quiz-steps">
          {[
            { num: 1, label: 'Info' },
            { num: 2, label: 'Question' },
            { num: 3, label: 'Options' },
            { num: 4, label: 'Review' }
          ].map((s, i) => (
            <React.Fragment key={s.num}>
              <div className={`qs ${s.num < quizStep ? 'done' : s.num === quizStep ? 'active' : ''}`}>
                <div className="qs-dot">
                  {s.num < quizStep ? <i className="fa-solid fa-check" style={{ fontSize: '8px' }}></i> : s.num}
                </div>
                <div className="qs-label">{s.label}</div>
              </div>
              {i < 3 && <div className={`qs-line ${s.num < quizStep ? 'done' : ''}`}></div>}
            </React.Fragment>
          ))}
        </div>
        
        <div className="scroll-y" style={{ flex: 1 }}>
          {quizStep === 1 && (
            <div className="quiz-form-card">
              <label>Quiz Title</label>
              <input type="text" value={quizTitle} onChange={e => setQuizTitle(e.target.value)} />
              <label style={{ marginTop: '10px' }}>Course</label>
              <select value={quizCourse} onChange={e => setQuizCourse(e.target.value)}>
                <option>Full Stack Web Development</option>
                <option>AI & Prompt Engineering</option>
                <option>React & Next.js Masterclass</option>
              </select>
              <label style={{ marginTop: '10px' }}>Time Limit (minutes)</label>
              <input type="number" value={quizTime} onChange={e => setQuizTime(e.target.value)} />
              <label style={{ marginTop: '10px' }}>Passing Score (%)</label>
              <input type="number" value={quizPass} onChange={e => setQuizPass(e.target.value)} />
            </div>
          )}

          {quizStep === 2 && (
            <div className="quiz-form-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <label style={{ margin: 0 }}>Question <span>{quizQ + 1}</span> of <span>{QUIZ_QUESTIONS.length}</span></label>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <button className="chip" onClick={() => setQuizQ(Math.max(0, quizQ - 1))}>‹</button>
                  <button className="chip" onClick={() => setQuizQ(Math.min(QUIZ_QUESTIONS.length - 1, quizQ + 1))}>›</button>
                </div>
              </div>
              <textarea value={QUIZ_QUESTIONS[quizQ]} readOnly></textarea>
            </div>
          )}

          {quizStep === 3 && (
            <div className="quiz-form-card">
              <label>Options <span style={{ color: 'var(--muted)', fontWeight: 500 }}>(pick correct)</span></label>
              <div className="option-row"><input type="radio" name="correct" /><input type="text" defaultValue="HTML" /></div>
              <div className="option-row"><input type="radio" name="correct" /><input type="text" defaultValue="CSS" /></div>
              <div className="option-row"><input type="radio" name="correct" defaultChecked /><input type="text" defaultValue="Django" /></div>
              <div className="option-row"><input type="radio" name="correct" /><input type="text" defaultValue="JavaScript" /></div>
            </div>
          )}

          {quizStep === 4 && (
            <div className="quiz-summary">
              <h4>📋 Quiz Summary</h4>
              <div className="sum-row"><span>Title</span><span>{quizTitle}</span></div>
              <div className="sum-row"><span>Course</span><span>{quizCourse}</span></div>
              <div className="sum-row"><span>Questions</span><span>{QUIZ_QUESTIONS.length} questions</span></div>
              <div className="sum-row"><span>Time Limit</span><span>{quizTime} min</span></div>
              <div className="sum-row"><span>Passing Score</span><span>{quizPass}%</span></div>
              <div className="sum-row"><span>Status</span><span style={{ color: '#16a34a' }}>✓ Ready to publish</span></div>
            </div>
          )}
        </div>
      </div>
      <div className="quiz-nav">
        {quizStep > 1 && (
          <button className="q-nav-btn" onClick={handlePrev}>← Back</button>
        )}
        <button className="q-nav-btn primary" onClick={handleNext}>
          {quizStep === 4 ? '✓ Publish Quiz' : 'Next →'}
        </button>
      </div>
    </div>
  );
}
