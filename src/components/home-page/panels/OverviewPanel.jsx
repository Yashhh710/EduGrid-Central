import React from 'react';

const OverviewPanel = ({ userName, onNavigate }) => {
  const statusItems = [
    { title: "Intro to UI Design", pct: 75, icon: "fa-bezier-curve", tracking: "Module 3 of 4" },
    { title: "Advanced React Core", pct: 40, icon: "fa-code", tracking: "Module 1 of 5" },
    { title: "Web Performance Optimization", pct: 55, icon: "fa-bolt", tracking: "Module 2 of 3" },
    { title: "TypeScript Mastery", pct: 88, icon: "fa-brackets", tracking: "Module 4 of 4" }
  ];

  return (
    <div style={styles.panelSplit}>
      <div style={styles.mainWorkplaceArea}>
        {/* Banner Section */}
        <div style={styles.welcomeBanner}>
          <h1>Welcome back, {userName}! 👋</h1>
          <p>Your weekly performance surge metric is up 14% compared to yesterday.</p>
          <div style={styles.bannerChips}>
            <div style={styles.bannerChip}><i className="fa-solid fa-award"></i> 3 Certificates</div>
            <div style={styles.bannerChip}><i className="fa-solid fa-bolt"></i> 5 Day Streak</div>
          </div>
        </div>

        {/* Continue Learning Grid */}
        <div style={styles.sectionLabel}>
          <span>Continue Learning</span>
          <a href="#!" onClick={() => onNavigate('courses')}>View All Courses</a>
        </div>
        
        <div style={styles.continueRow}>
          {statusItems.map((item, index) => (
            <div key={index} style={styles.clCard}>
              <div style={styles.clThumb}><i className={`fa-solid ${item.icon}`}></i></div>
              <div style={styles.clInfo}>
                <div style={styles.clTitle}>{item.title}</div>
                <div style={styles.clSub}>{item.tracking}</div>
                <div style={styles.clBarWrap}>
                  <div style={{ ...styles.clBar, width: `${item.pct}%` }}></div>
                </div>
              </div>
              <div style={styles.clPct}>{item.pct}%</div>
            </div>
          ))}
        </div>

        {/* Gradebook Matrix Preview */}
        <div style={styles.sectionLabel}><span>Recent Milestone Track</span></div>
        <div style={styles.gbWrap}>
          <table style={styles.gbTable}>
            <thead style={styles.gbTableHead}>
              <tr style={styles.gbTableRow}>
                <th style={styles.gbTableHeadTh}>Course Module Target</th>
                <th style={styles.gbTableHeadTh}>Assessment</th>
                <th style={styles.gbTableHeadTh}>Completion Metric</th>
              </tr>
            </thead>
            <tbody>
              <tr style={styles.gbTableRow}>
                <td style={{ ...styles.gbTableCell, ...styles.gbTableCellFirst }}>Advanced UI Patterns</td>
                <td style={styles.gbTableCell}><span style={styles.badgeA}>Grade A</span></td>
                <td style={styles.gbTableCell}><div style={styles.progressWrap}><div style={{ ...styles.progressFill, width: '92%' }}></div></div></td>
              </tr>
              <tr style={styles.gbTableRow}>
                <td style={{ ...styles.gbTableCell, ...styles.gbTableCellFirst }}>Database Logic Config</td>
                <td style={styles.gbTableCell}><span style={styles.badgeB}>Grade B</span></td>
                <td style={styles.gbTableCell}><div style={styles.progressWrap}><div style={{ ...styles.progressFill, width: '84%' }}></div></div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Right Column Context Analytics */}
      <div style={styles.rightPanelColumn}>
        <div style={styles.rpStats}>
          <div style={styles.statBox}>
            <i className="fa-solid fa-clock" style={{ color: 'var(--accent)' }}></i>
            <div style={styles.num}>24.8</div>
            <div style={styles.lbl}>Hours Spent</div>
          </div>
          <div style={styles.statBox}>
            <i className="fa-solid fa-graduation-cap" style={{ color: 'var(--accent2)' }}></i>
            <div style={styles.num}>12</div>
            <div style={styles.lbl}>Completed</div>
          </div>
        </div>

        <div style={styles.rpSection}>
          <div style={styles.rpTitle}>Activity Engagement Chart</div>
          <div style={styles.graphArea}>
            <svg style={styles.graphSvg} viewBox="0 0 100 40" preserveAspectRatio="none">
              <path d="M0,35 Q15,10 30,25 T60,5 T90,15 T100,10 L100,40 L0,40 Z" fill="rgba(37, 99, 235, 0.1)" stroke="var(--accent)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        <div style={styles.premiumCard}>
          <h4>Unlock Advanced Lab access</h4>
          <p>Get instant deployments into sandbox containers & real-time compute grids.</p>
          <button style={styles.btnPremium}>Upgrade Pro</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  panelSplit: { display: 'grid', gridTemplateColumns: '1fr 280px', gap: '20px', width: '100%', overflow: 'hidden' },
  mainWorkplaceArea: { display: 'flex', flexDirection: 'column', width: '100%', minWidth: 0 },
  welcomeBanner: { background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #7c3aed 100%)', borderRadius: 'var(--radius)', padding: '28px 32px', marginBottom: '24px' },
  bannerChips: { display: 'flex', gap: '10px', marginTop: '18px' },
  bannerChip: { background: 'rgba(255,255,255,0.12)', padding: '6px 14px', borderRadius: '999px', color: 'white', fontSize: '11px', fontWeight: '700' },
  sectionLabel: { fontSize: '15px', fontWeight: '800', margin: '24px 0 16px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  continueRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px', width: '100%', overflow: 'hidden' },
  clCard: { background: 'var(--card)', border: '1.5px solid var(--border)', borderRadius: '14px', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '14px', minWidth: 0, overflow: 'hidden' },
  clThumb: { width: '48px', height: '48px', borderRadius: '12px', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 },
  clInfo: { flex: 1, minWidth: 0 },
  clTitle: { fontSize: '13px', fontWeight: '700', color: 'var(--text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  clSub: { fontSize: '11px', color: 'var(--muted)', marginTop: '2px' },
  clBarWrap: { height: '4px', background: 'var(--border)', borderRadius: '2px', marginTop: '7px' },
  clBar: { height: '100%', background: 'var(--accent-grad)', borderRadius: '2px' },
  clPct: { fontSize: '13px', fontWeight: '800', color: 'var(--accent)', flexShrink: 0 },
  gbWrap: { border: '1.5px solid var(--border)', borderRadius: '14px', overflow: 'hidden', marginBottom: '24px' },
  gbTable: { width: '100%', borderCollapse: 'collapse', fontSize: '12px' },
  gbTableHead: { background: 'var(--bg)' },
  gbTableHeadTh: { padding: '11px 14px', textAlign: 'left', fontWeight: '700', borderBottom: '1px solid var(--border)' },
  gbTableRow: { borderBottom: '1px solid #f1f5f9' },
  gbTableCell: { padding: '11px 14px', verticalAlign: 'middle' },
  gbTableCellFirst: { fontWeight: '700' },
  rightPanelColumn: { background: 'var(--card)', padding: '20px', borderRadius: 'var(--radius)', border: '1.5px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '20px', minWidth: 0, overflow: 'hidden' },
  rpStats: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' },
  statBox: { background: 'var(--bg)', padding: '14px', borderRadius: '14px', border: '1.5px solid var(--border)' },
  num: { fontSize: '26px', fontWeight: '900' },
  lbl: { fontSize: '11px', color: 'var(--muted)', marginTop: '4px', lineHeight: '1.3' },
  rpSection: { marginBottom: '18px' },
  rpTitle: { fontSize: '13px', fontWeight: '800', color: 'var(--text)', marginBottom: '12px' },
  graphArea: { height: '80px', background: 'var(--bg)', borderRadius: '12px', overflow: 'hidden' },
  graphSvg: { width: '100%', height: '100%' },
  premiumCard: { background: 'linear-gradient(135deg, #1e3a8a, #7c3aed)', borderRadius: '16px', padding: '18px', textAlign: 'center', color: '#fff' },
  btnPremium: { width: '100%', padding: '10px', borderRadius: '10px', border: 'none', background: '#fff', color: 'var(--accent)', fontWeight: '800', marginTop: '12px', cursor: 'pointer' },
  badgeA: { background: '#dcfce7', color: '#16a34a', padding: '3px 8px', borderRadius: '6px', fontWeight: '700' },
  badgeB: { background: '#dbeafe', color: '#1d4ed8', padding: '3px 8px', borderRadius: '6px', fontWeight: '700' },
  progressWrap: { width: '80px', height: '5px', background: 'var(--border)', borderRadius: '3px' },
  progressFill: { height: '100%', background: 'var(--accent)', borderRadius: '3px' }
};

export default OverviewPanel;