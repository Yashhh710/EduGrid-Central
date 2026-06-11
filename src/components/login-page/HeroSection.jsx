import React from 'react';

const HeroSection = () => {
  return (
    <section style={styles.heroSection}>
      <div style={styles.heroCopy}>
        <span style={styles.eyebrow}>
          <i className="ph-fill ph-rocket"></i> Your Learning Journey Starts Here
        </span>
        <h1 style={styles.heroHeading}>
          Learn Smarter. <span style={{ color: '#4f46e5' }}>Track Progress.</span><br /> Achieve More.
        </h1>
        <p style={styles.heroParagraph}>
          Login to your EduGrid Central account to access personalized courses, progress tracking, and exclusive offers.
        </p>
      </div>

      <div style={styles.featuresContainer}>
        <div style={styles.featurePill}><i className="ph-fill ph-video-camera"></i> Video Lessons</div>
        <div style={styles.featurePill}><i className="ph-fill ph-chart-line-up"></i> Track Progress</div>
        <div style={styles.featurePill}><i className="ph-fill ph-shield-check"></i> Secure Access</div>
      </div>
    </section>
  );
};

const styles = {
  heroSection: {
    width: '100%',
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '2rem',
    padding: '1rem 0',
    boxSizing: 'border-box',
  },

  heroCopy: {
    width: '100%',
  },

  eyebrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: ".5rem",
    padding: ".75rem 1rem",
    borderRadius: "9999px",
    background: "rgba(79,70,229,.1)",
    color: "#4f46e5",
    fontWeight: 700,
    marginBottom: "1.5rem",
    fontSize: ".9rem"
  },

  heroHeading: {
    fontFamily: "'Syne', sans-serif",
    fontSize: 'clamp(3rem, 5vw, 4.5rem)',
    lineHeight: 1.05,
    letterSpacing: '-0.04em',
    margin: '0 0 1.5rem',
  },

  heroParagraph: {
    color: '#6b7280',
    fontSize: '1.1rem',
    lineHeight: 1.8,
    margin: 0,
  },

  heroActions: {
    display: "flex",
    gap: "1rem",
    marginTop: "2rem",
    flexWrap: "wrap"
  },

  primaryButton: {
    padding: "1rem 2rem",
    borderRadius: "14px",
    background: "#4f46e5",
    color: "#fff",
    border: "none",
    fontWeight: 700,
    cursor: "pointer"
  },

  secondaryButton: {
    padding: "1rem 2rem",
    borderRadius: "14px",
    background: "#fff",
    border: "1px solid #e5e7eb",
    fontWeight: 700,
    cursor: "pointer"
  },

  featuresContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1rem',
    marginTop: '1.5rem',
  },

  featurePill: {
    display: 'flex',
    alignItems: 'center',
    gap: '.75rem',
    background: '#fff',
    border: '1px solid rgba(15,23,42,.08)',
    padding: '1rem 1.15rem',
    borderRadius: '1rem',
  },

  loginSection: {
    width: "100%",
    padding: "6rem 5%",
    background: "#f8fafc"
  },

  loginCard: {
    width: "100%",
    margin: "0 auto",
    background: "#fff",
    padding: "2rem",
    borderRadius: "24px",
    boxShadow: "0 20px 40px rgba(0,0,0,.08)"
  },

  input: {
    width: "100%",
    padding: "1rem",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    marginBottom: "1rem",
    fontSize: "1rem"
  },

  loginButton: {
    width: "100%",
    padding: "1rem",
    background: "#4f46e5",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    fontWeight: 700,
    cursor: "pointer"
  },

  plansSection: {
    width: "100%",
    padding: "6rem 5%",
    background: "#fff"
  },

  plansGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
    gap: "2rem",
    marginTop: "3rem"
  },

  planCard: {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: "24px",
    padding: "2rem",
    boxShadow: "0 10px 30px rgba(0,0,0,.05)"
  },

  planPrice: {
    fontSize: "3rem",
    fontWeight: 800,
    margin: "1rem 0"
  },

  sectionTitle: {
    fontSize: "clamp(2rem,4vw,3.5rem)",
    fontWeight: 800,
    textAlign: "center"
  }
};

export default HeroSection;