import React from 'react';

const PricingSection = ({ isVisible, onSelectPlan }) => {
  if (!isVisible) return null;

  return (
    <div id="plan-section" className="plan-selection visible" style={styles.planSelection}>
          <p style={{ color: '#4f46e5', fontWeight: '700', marginBottom: '.35rem', fontSize: '0.95rem' }}>-- CHOOSE YOUR PLAN --</p>
      <div style={styles.planHeading}>
        <div>
        
          <h3 style={styles.planTitle}>Pick the plan that fits your learning goals.</h3>
        </div>
      </div>
      
      <div style={styles.planGrid}>
        {/* Plan 1 */}
        <div style={styles.planCard}>
          <div>
            <span style={{ ...styles.planLabel, background: '#eefdf4', color: '#166534' }}>Free</span>
            <div style={styles.planName}>Free Trial</div>
            <div style={styles.planPrice}>₹0 <small style={styles.priceSmall}>/ 7 days</small></div>
            <ul style={styles.planFeatures}>
              <li><i className="ph-fill ph-check-circle"></i> 10 Premium Courses</li>
              <li><i className="ph-fill ph-check-circle"></i> Course Previews</li>
              <li><i className="ph-fill ph-check-circle"></i> Community Access</li>
            </ul>
          </div>
          <button type="button" onClick={() => onSelectPlan && onSelectPlan('free')} style={styles.btnPrimary}>Choose Free</button>
        </div>
        
        {/* Plan 2 */}
        <div style={styles.planCard}>
          <div>
            <span style={{ ...styles.planLabel, background: '#f6f5ff', color: '#4f46e5' }}>Starter</span>
            <div style={styles.planName}>Starter</div>
            <div style={styles.planPrice}>₹499 <small style={styles.priceSmall}>/ month</small></div>
            <ul style={styles.planFeatures}>
              <li><i className="ph-fill ph-check-circle"></i> 50+ Courses</li>
              <li><i className="ph-fill ph-check-circle"></i> Basic Certificates</li>
              <li><i className="ph-fill ph-check-circle"></i> Community Support</li>
            </ul>
          </div>
          <button type="button" onClick={() => onSelectPlan && onSelectPlan('starter')} style={styles.btnPrimary}>Choose Starter</button>
        </div>
        
        {/* Plan 3 - Most Popular */}
        <div className="popular" style={{ ...styles.planCard, ...styles.popularPlanCard }}>
          <div>
            <span style={styles.planLabelPopular}>Most Popular</span>
            <div style={styles.planName}>Pro</div>
            <div style={styles.planPrice}>₹999 <small style={styles.priceSmall}>/ month</small></div>
            <ul style={styles.planFeatures}>
              <li><i className="ph-fill ph-check-circle"></i> All Courses Access</li>
              <li><i className="ph-fill ph-check-circle"></i> Premium Certificates</li>
              <li><i className="ph-fill ph-check-circle"></i> AI Learning Assistant</li>
            </ul>
          </div>
          <button type="button" onClick={() => onSelectPlan && onSelectPlan('pro')} style={styles.btnPrimary}>Choose Pro</button>
        </div>
        
        {/* Plan 4 */}
        <div style={styles.planCard}>
          <div>
            <span style={{ ...styles.planLabel, background: '#f8fafc', color: '#111827', border: '1px solid #e5e7eb' }}>Premium</span>
            <div style={styles.planName}>Premium</div>
            <div style={styles.planPrice}>₹1,999 <small style={styles.priceSmall}>/ month</small></div>
            <ul style={styles.planFeatures}>
              <li><i className="ph-fill ph-check-circle"></i> Everything in Pro</li>
              <li><i className="ph-fill ph-check-circle"></i> 1-on-1 Mentorship</li>
              <li><i className="ph-fill ph-check-circle"></i> Resume Reviews</li>
            </ul>
          </div>
          <button type="button" onClick={() => onSelectPlan && onSelectPlan('premium')} style={styles.btnPrimary}>Choose Premium</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  planSelection: { marginTop: "3.5rem", width: "100%", background: "#ffffff", borderRadius: "2rem", padding: "2.5rem", boxShadow: "0 24px 80px rgba(15, 23, 42, 0.08)", position: "relative", zIndex: 1 },
  planHeading: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", marginBottom: "2rem", borderTop: "1px solid #e5e7eb", paddingTop: "3rem" },
  planTitle: { margin: 0, fontFamily: "'Syne', sans-serif", fontSize: "2rem" },
  planGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" },
  planCard: { background: "#fff", border: "1px solid rgba(15, 23, 42, 0.06)", borderRadius: "1.5rem", padding: "2rem", boxShadow: "0 24px 80px rgba(15, 23, 42, 0.08)", display: "flex", flexDirection: "column", justifyContent: "space-between", transition: "transform 0.3s ease" },
  popularPlanCard: { border: "1px solid #c7d2fe", background: "linear-gradient(180deg, rgba(79, 70, 229, 0.04) 0%, #ffffff 100%)", boxShadow: "0 30px 60px rgba(79, 70, 229, 0.1)", position: "relative", overflow: "hidden" },
  planLabel: { display: "inline-flex", alignItems: "center", padding: ".35rem .75rem", borderRadius: "9999px", fontSize: ".78rem", fontWeight: "700", marginBottom: "1.25rem", width: "fit-content" },
  planLabelPopular: { display: "inline-flex", alignItems: "center", padding: ".35rem .75rem", borderRadius: "9999px", fontSize: ".78rem", fontWeight: "700", marginBottom: "1.25rem", width: "fit-content", background: "#4f46e5", color: "#fff" },
  planName: { fontWeight: "800", fontSize: "1.2rem", marginBottom: ".25rem" },
  planPrice: { fontSize: "2.25rem", fontWeight: "800", marginBottom: "1.25rem", fontFamily: "'Syne', sans-serif" },
  priceSmall: { fontSize: ".85rem", color: "#6b7280", fontWeight: "400" },
  planFeatures: { listStyle: "none", padding: 0, margin: "0 0 2rem 0", color: "#6b7280", lineHeight: "2", flexGrow: 1 },
  btnPrimary: { display: "inline-flex", alignItems: "center", justifyContent: "center", gap: ".5rem", padding: "1rem 1.25rem", borderRadius: "14px", border: "none", background: "linear-gradient(135deg, #4f46e5, #7c3aed)", color: "#fff", fontWeight: "700", cursor: "pointer", transition: "transform .2s ease, box-shadow .2s ease", width: "100%", textDecoration: "none" }
};

export default PricingSection;