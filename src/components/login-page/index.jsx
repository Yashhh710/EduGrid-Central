import React, { useState } from 'react';
import HeroSection from './HeroSection';
import LoginForm from './LoginForm';
import PricingSection from './PricingSection';

const LoginMaster = ({ onBack, onNavigateHome }) => {
  const [userSessionName, setUserSessionName] = useState('');
  const [showPlans, setShowPlans] = useState(false);

  const handleLoginSuccess = (validatedName) => {
    setUserSessionName(validatedName);
    
    try {
      localStorage.setItem('edu_name', validatedName);
    } catch (err) {
      console.warn("localStorage evaluation blocked:", err);
    }

    setShowPlans(true);

    setTimeout(() => {
      const planEl = document.getElementById('plan-section');
      if (planEl) {
        planEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handlePlanNavigation = (planId) => {
    const activeName = userSessionName || localStorage.getItem('edu_name') || '';
    if (onNavigateHome) {
      onNavigateHome(activeName, planId);
      return;
    }

    const params = {};
    if (activeName) params.name = activeName;
    if (planId) params.plan = planId;

    const qs = Object.keys(params).length ? `?${new URLSearchParams(params).toString()}` : '';
    window.location.hash = `#/home${qs}`;
  };

  return (
    <div style={styles.bodyWrap}>
      <style>{inlineMediaOverrides}</style>
      <div style={styles.page}>
        {/* Main Topbar (full-width centered) */}
        <header style={styles.topbar}>
          <button type="button" onClick={onBack} style={{ ...styles.logo, border: 'none', padding: 0, background: 'transparent', cursor: 'pointer' }}>
            <div style={styles.logoIcon}><i className="ph-bold ph-books"></i></div>
            <div style={styles.logoText}>EduGrid <span style={{ color: '#4f46e5' }}>Central</span></div>
          </button>
          <button type="button" onClick={onBack} style={{ ...styles.btnPrimary, padding: '.85rem 1.15rem', fontSize: '.95rem', width: 'auto', border: 'none', cursor: 'pointer' }}>
            Back to Home
          </button>
        </header>

        <div className="login-content" style={styles.container}>
          <HeroSection />
          <LoginForm onLoginSuccess={handleLoginSuccess} />
        </div>

        <PricingSection isVisible={showPlans} onSelectPlan={handlePlanNavigation} />
      </div>
    </div>
  );
};

const styles = {
  bodyWrap: { fontFamily: "'DM Sans', sans-serif", background: "linear-gradient(180deg, #eff2ff 0%, #ffffff 100%)", color: "#111827", width: "100%", overflowX: 'hidden', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' },
  page: { width: '100%',margin: '0 auto', padding: '24px clamp(1rem, 3vw, 2.5rem)', boxSizing: 'border-box' },
  container: { width: '100%', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', alignItems: 'start', gap: '3rem', boxSizing: 'border-box' },
  topbar: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", margin: "0 auto 2.5rem", padding: "1rem 1.5rem", background: "#ffffff", borderRadius: "1.75rem", border: "1px solid #e5e7eb", boxShadow: "0 24px 80px rgba(15, 23, 42, 0.05)", width: '100%', boxSizing: 'border-box' },
  logo: { display: "inline-flex", alignItems: "center", gap: ".75rem", textDecoration: "none", color: "inherit" },
  logoIcon: { width: "44px", height: "44px", borderRadius: "14px", display: "grid", placeItems: "center", background: "linear-gradient(135deg, #4f46e5, #7c3aed)", color: "#fff", fontSize: "1.3rem" },
  logoText: { fontFamily: "'Syne', sans-serif", fontSize: "1.1rem", fontWeight: "800" },
  btnPrimary: { display: "inline-flex", alignItems: "center", justifyContent: "center", gap: ".5rem", padding: "1rem 1.25rem", borderRadius: "14px", border: "none", background: "linear-gradient(135deg, #4f46e5, #7c3aed)", color: "#fff", fontWeight: "700", cursor: "pointer", textDecoration: "none" }
};

const inlineMediaOverrides = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .plan-selection.visible { animation: fadeInUp 0.6s ease forwards; }
  .popular::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #4f46e5, #7c3aed); }
  input:focus { border-color: rgba(79, 70, 229, 0.5) !important; background: #fff !important; box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.1) !important; }
  @media (max-width: 1024px) {
    .login-content { display: grid !important; grid-template-columns: 1fr !important; gap: 2rem !important; }
    .login-card { width: 100% !important; max-width: 100% !important; }
  }
  @media (max-width: 640px) {
    .login-content { padding-inline: 0 !important; gap: 1.5rem !important; }
    .login-card { margin-inline: 0 !important; }
  }
`;

export default LoginMaster;