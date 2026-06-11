import React, { useState } from 'react';

const ProfilePanel = ({ userName }) => {
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({ questionText: '', difficulty: 'intermediate' });
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div style={styles.workspace}>
      <div style={styles.cardHeader}>
        <h3>Evaluation Configuration Engine</h3>
        <p>User Instance Workspace Profile: <strong>{userName}</strong></p>
      </div>

      {/* Quiz Progress Multi-step Tracker Component */}
      <div style={styles.quizSteps}>
        {[1, 2, 3].map((step) => (
          <div key={step} style={{ ...styles.qs, ...(activeStep === step ? styles.qsActive : {}) }}>
            <div style={styles.qsDot}>{step}</div>
            <span style={styles.qsLabel}>Phase {step}</span>
          </div>
        ))}
      </div>

      {/* Dynamic Structural Input Controls */}
      {activeStep === 1 && (
        <div style={styles.quizFormCard}>
          <label>Define Core Target Assessment Prompt</label>
          <textarea 
            placeholder="Type your question statement here..."
            value={formData.questionText}
            onChange={(e) => setFormData({ ...formData, questionText: e.target.value })}
            style={styles.textarea}
          />
          <label style={{ marginTop: '12px' }}>Operational Group Scope Tier</label>
          <select 
            value={formData.difficulty} 
            onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
            style={styles.select}
          >
            <option value="beginner">Beginner Operational Level</option>
            <option value="intermediate">Intermediate Functional Scope</option>
            <option value="advanced">Advanced Enterprise Hierarchy</option>
          </select>
        </div>
      )}

      {activeStep === 2 && (
        <div style={styles.quizFormCard}>
          <label>Configure Core Options</label>
          {['A', 'B', 'C'].map((opt) => (
            <div key={opt} style={styles.optionRow}>
              <input 
                type="radio" 
                name="quiz-opt" 
                checked={selectedOption === opt}
                onChange={() => setSelectedOption(opt)}
              />
              <span style={{ fontSize: '13px', fontWeight: '600' }}>Option Vector Model [{opt}]</span>
            </div>
          ))}
        </div>
      )}

      {activeStep === 3 && (
        <div style={styles.quizSummary}>
          <h4>Assessment Configuration Parameters Approved</h4>
          <div style={styles.sumRow}><span>Prompt Parameter:</span> <span>{formData.questionText || "Undefined Stack"}</span></div>
          <div style={styles.sumRow}><span>Operational Tier:</span> <span>{formData.difficulty.toUpperCase()}</span></div>
          <div style={styles.sumRow}><span>Validated Choice Vector:</span> <span>Option Vector {selectedOption || "None Selected"}</span></div>
        </div>
      )}

      {/* Navigation Triggers */}
      <div style={styles.quizNav}>
        <button disabled={activeStep === 1} style={styles.qNavBtn} onClick={() => setActiveStep(p => p - 1)}>Back</button>
        <button 
          style={{ ...styles.qNavBtn, ...styles.primaryBtn }} 
          onClick={() => activeStep < 3 ? setActiveStep(p => p + 1) : alert('Runtime Matrix Saved!')}
        >
          {activeStep === 3 ? "Commit Config Structure" : "Advance Pipeline Phase"}
        </button>
      </div>
    </div>
  );
};

const styles = {
  workspace: { background: 'var(--card)', border: '1.5px solid var(--border)', borderRadius: '18px', padding: '24px' },
  cardHeader: { marginBottom: '20px', borderBottom: '1px solid var(--border)', paddingBottom: '12px' },
  quizSteps: { display: 'flex', gap: '20px', marginBottom: '24px', background: 'var(--bg)', padding: '12px', borderRadius: '12px' },
  qs: { flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0.4 },
  qsActive: { opacity: 1 },
  qsDot: { width: '30px', height: '30px', borderRadius: '50%', background: 'var(--accent)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '12px' },
  qsLabel: { fontSize: '11px', marginTop: '4px', fontWeight: '700' },
  quizFormCard: { display: 'flex', flexDirection: 'column', gap: '6px' },
  textarea: { width: '100%', height: '80px', padding: '10px', borderRadius: '8px', border: '1.5px solid var(--border)', background: 'var(--bg)', outline: 'none', resize: 'none' },
  select: { padding: '10px', borderRadius: '8px', border: '1.5px solid var(--border)', background: 'var(--bg)', outline: 'none' },
  optionRow: { display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0' },
  quizNav: { display: 'flex', gap: '12px', marginTop: '20px' },
  qNavBtn: { flex: 1, padding: '10px', borderRadius: '10px', border: '1.5px solid var(--border)', background: '#fff', cursor: 'pointer', fontWeight: '700' },
  primaryBtn: { background: 'var(--accent-grad)', color: '#fff', border: 'none' },
  quizSummary: { background: 'var(--bg)', padding: '16px', borderRadius: '12px' },
  sumRow: { display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border)', fontSize: '12px' }
};

export default ProfilePanel;