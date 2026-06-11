import React from 'react';

function Pricing({ onOpenLogin }) {
  return (
    <section id="pricing" className="pricing-section container reveal">
      <div className="pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', background: 'linear-gradient(90deg,#ede9fe,#e0e7ff)', color: 'var(--primary)', padding: '.4rem 1rem', borderRadius: '9999px', fontWeight: 700, marginBottom: '1rem', border: '1px solid var(--primary-mid)' }}>PRICING PLANS</div>
      <h2 className="section-title">Choose Your <span className="hl">Learning Plan</span></h2>
      <p className="section-sub center">Start learning for free and upgrade anytime.</p>
      
      <div className="pricing-grid">
        {/* Free Plan */}
        <div className="price-card">
          <div className="price-head">
            <div className="price-name">Free Trial</div>
            <div style={{ background: '#ecfdf5', color: '#065f46', padding: '.25rem .6rem', borderRadius: '9999px', fontWeight: 700, fontSize: '.8rem' }}>FREE</div>
          </div>
          <div className="price-price">₹0 <span style={{ fontSize: '.78rem', fontWeight: 600, color: 'var(--text-gray)' }}>/ 7 Days</span></div>
          <div className="price-feats">
            <div className="feat-item"><i className="ph-fill ph-check-circle"></i> Access to 10 Basic Courses</div>
            <div className="feat-item"><i className="ph-fill ph-check-circle"></i> Standard Video Player</div>
            <div className="feat-item"><i className="ph-fill ph-check-circle"></i> Basic Progress Tracking</div>
          </div>
          <div className="price-cta"><a href="mailto:enterprise@edugrid.com" className="btn btn-outline-dark" style={{ width: '100%' }}>Free Trial</a></div>
        </div>

        {/* Monthly Plan */}
        <div className="price-card">
          <div className="price-head">
            <div className="price-name">Monthly Pass</div>
          </div>
          <div className="price-price">₹999 <span style={{ fontSize: '.78rem', fontWeight: 600, color: 'var(--text-gray)' }}>/ Month</span></div>
          <div className="price-feats">
            <div className="feat-item"><i className="ph-fill ph-check-circle"></i> Access to All Courses</div>
            <div className="feat-item"><i className="ph-fill ph-check-circle"></i> Advanced Track Analytics</div>
            <div className="feat-item"><i className="ph-fill ph-check-circle"></i> Custom Quiz Access</div>
            <div className="feat-item"><i className="ph-fill ph-check-circle"></i> Community Forum Support</div>
          </div>
          <div className="price-cta"><a href="mailto:enterprise@edugrid.com" className="btn btn-outline-dark" style={{ width: '100%' }}>Choose Plan</a></div>
        </div>

        {/* Popular Plan */}
        <div className="price-card popular">
          <div className="price-head">
            <div className="price-name">Pro Annual</div>
            <div style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', padding: '.25rem .6rem', borderRadius: '9999px', fontWeight: 700, fontSize: '.75rem', letterSpacing: '.04em' }}>BEST VALUE</div>
          </div>
          <div className="price-price">₹7,999 <span style={{ fontSize: '.78rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>/ Year</span></div>
          <div className="price-feats">
            <div className="feat-item"><i className="ph-fill ph-check-circle"></i> Everything in Monthly Pass</div>
            <div className="feat-item"><i className="ph-fill ph-check-circle"></i> Official Certifications</div>
            <div className="feat-item"><i className="ph-fill ph-check-circle"></i> Offline Material Downloads</div>
            <div className="feat-item"><i className="ph-fill ph-check-circle"></i> Priority Mentor Review</div>
          </div>
          <div className="price-cta"><button type="button" className="btn btn-white" style={{ width: '100%', border: '1px solid rgba(255,255,255,0.25)', cursor: 'pointer' }} onClick={onOpenLogin}>Get Pro Access</button></div>
        </div>

        {/* Enterprise Plan */}
        <div className="price-card">
          <div className="price-head">
            <div className="price-name">Enterprise</div>
          </div>
          <div className="price-price">Custom</div>
          <div className="price-feats">
            <div className="feat-item"><i className="ph-fill ph-check-circle"></i> Unlimited Team Members</div>
            <div className="feat-item"><i className="ph-fill ph-check-circle"></i> Dedicated Infrastructure</div>
            <div className="feat-item"><i className="ph-fill ph-check-circle"></i> API Custom Integrations</div>
            <div className="feat-item"><i className="ph-fill ph-check-circle"></i> 24/7 Priority Support Call</div>
          </div>
          <div className="price-cta"><a href="mailto:enterprise@edugrid.com" className="btn btn-outline-dark" style={{ width: '100%' }}>Contact Sales</a></div>
        </div>
      </div>

      <div className="p-stats">
        <div className="p-stat"><div className="num">25K+</div><div style={{ fontWeight: 700, color: 'var(--text-gray)' }}>Active Learners</div></div>
        <div className="p-stat"><div className="num">350+</div><div style={{ fontWeight: 700, color: 'var(--text-gray)' }}>Courses</div></div>
        <div className="p-stat"><div className="num">4.9★</div><div style={{ fontWeight: 700, color: 'var(--text-gray)' }}>Avg Rating</div></div>
        <div className="p-stat"><div className="num">95%</div><div style={{ fontWeight: 700, color: 'var(--text-gray)' }}>Success Rate</div></div>
      </div>

      <div style={{ marginTop: '2rem', padding: '1.5rem 1.25rem', background: 'linear-gradient(135deg,#4f46e5,#7c3aed)', borderRadius: '1rem', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', width: '100%' }}>
        <div style={{ textAlign: 'left' }}>
          <h3 style={{ fontFamily: '"Syne",sans-serif', fontSize: '1.15rem', marginBottom: '.25rem' }}>Ready to Start Your Learning Journey?</h3>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '.25rem' }}>Start with a 7-Day Free Trial — no credit card required.</p>
        </div>
        <div style={{ display: 'flex', gap: '.6rem' }}>
          <button type="button" className="btn btn-white" style={{ padding: '.6rem 1rem', borderRadius: '.6rem', fontWeight: 700, border: 'none', cursor: 'pointer' }} onClick={onOpenLogin}>Start Free Trial</button>
          <a href="#" className="btn" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)', padding: '.6rem 1rem', borderRadius: '.6rem' }}>View All Plans</a>
        </div>
      </div>
    </section>
  );
}

export default Pricing;