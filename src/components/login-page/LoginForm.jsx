import React, { useState } from 'react';

const LoginForm = ({ onLoginSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [statusText, setStatusText] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setStatusText('Please enter your name.');
      setIsSuccess(false);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailPattern.test(email)) {
      setStatusText('Please enter a valid email address.');
      setIsSuccess(false);
      return;
    }

    if (!password.trim()) {
      setStatusText('Please enter your password.');
      setIsSuccess(false);
      return;
    }

    setStatusText(`Login successful, ${name}! Choose your plan below.`);
    setIsSuccess(true);
    onLoginSuccess(name.trim());
  };

  return (
    <div className="login-card" style={styles.loginCard}>
      <h2 style={styles.cardTitle}>Login to Your Account</h2>
      <p style={styles.cardSubtitle}>Enter your credentials to continue your learning journey.</p>
      
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Full Name</label>
          <input 
            type="text" 
            placeholder="Enter your full name" 
            style={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email Address</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Password</label>
          <input 
            type="password" 
            placeholder="Enter your password" 
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        <div style={styles.checkboxRow}>
          <label style={styles.checkboxLabel}>
            <input type="checkbox" style={{ cursor: 'pointer' }} /> Remember Me
          </label>
          <a href="#" style={{ color: '#4f46e5', fontWeight: '600', fontSize: '0.9rem' }}>Forgot Password?</a>
        </div>
        <button type="submit" style={styles.btnPrimary}>
          Login Now <i className="ph-bold ph-arrow-right"></i>
        </button>
      </form>

      {statusText && (
        <p style={{ ...styles.loginStatus, color: isSuccess ? '#16a34a' : '#dc2626' }}>
          {statusText}
        </p>
      )}
    </div>
  );
};

const styles = {
  loginCard: { background: '#ffffff', borderRadius: '2rem', boxShadow: '0 24px 80px rgba(15, 23, 42, 0.08)', border: '1px solid rgba(15, 23, 42, 0.06)', padding: '2.5rem', width: '100%', maxWidth: '540px', marginInline: 'auto', boxSizing: 'border-box' },
  cardTitle: { fontFamily: "'Syne', sans-serif", fontSize: '2rem', marginBottom: '.5rem' },
  cardSubtitle: { color: '#6b7280', marginBottom: '1.75rem', lineHeight: '1.8' },
  formGroup: { marginBottom: '1.25rem' },
  label: { display: 'block', fontSize: '.9rem', fontWeight: '700', marginBottom: '.5rem' },
  input: { width: '100%', padding: '1rem 1.1rem', borderRadius: '16px', border: '1px solid #e5e7eb', background: '#f8fafc', color: '#111827', outline: 'none', fontSize: '.95rem', transition: 'all 0.2s', boxSizing: 'border-box' },
  checkboxRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', gap: '1rem', flexWrap: 'wrap' },
  checkboxLabel: { display: "inline-flex", alignItems: "center", gap: ".5rem", color: "#6b7280", fontSize: ".9rem", cursor: "pointer" },
  btnPrimary: { display: "inline-flex", alignItems: "center", justifyContent: "center", gap: ".5rem", padding: "1rem 1.25rem", borderRadius: "14px", border: "none", background: "linear-gradient(135deg, #4f46e5, #7c3aed)", color: "#fff", fontWeight: "700", cursor: "pointer", transition: "transform .2s ease, box-shadow .2s ease", width: "100%", textDecoration: "none" },
  loginStatus: { marginTop: "1.25rem", fontWeight: "700", textAlign: "center", minHeight: "1.5rem" }
};

export default LoginForm;