import React from 'react';

const Header = ({ searchQuery, onSearchChange, userName }) => {
  const initials = (userName || 'U').split(' ').map(n => n[0]).slice(0,2).join('').toUpperCase();

  return (
    <header style={styles.topbar}>
      <h2 style={styles.pageTitle}>EduGrid Central Workplace</h2>

      <div style={styles.searchWrap}>
        <i className="fa-solid fa-magnifying-glass" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }}></i>
        <input 
          type="text" 
          placeholder="Search courses or skills..." 
          value={searchQuery || ''}
          onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
          style={styles.searchInput}
        />
      </div>

      <div style={styles.topbarActions}>
        <button style={styles.iconBtn} aria-label="Notifications">
          <i className="fa-solid fa-bell"></i>
        </button>

        <div style={styles.profileChip}>
          <div style={{
            width: 34,
            height: 34,
            borderRadius: '50%',
            background: 'linear-gradient(135deg,var(--accent),var(--accent-2))',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
          }}>{initials}</div>
          <div style={{ minWidth: 80, fontSize: 13, color: 'var(--text)' }}>{userName || 'User'}</div>
        </div>
      </div>
    </header>
  );
};

const styles = {
  topbar: {
    background: 'var(--card)',
    borderBottom: '1px solid var(--border)',
    padding: '14px 28px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    flexShrink: 0,
  },
  pageTitle: {
    fontSize: '17px',
    fontWeight: '800',
    color: 'var(--text)',
    flex: 1,
  },
  searchWrap: {
    position: 'relative',
  },
  searchInput: {
    background: 'var(--bg)',
    border: '1.5px solid var(--border)',
    padding: '9px 14px 9px 38px',
    borderRadius: '12px',
    fontSize: '13px',
    color: 'var(--text)',
    outline: 'none',
    width: '220px',
  },
  topbarActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  iconBtn: {
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    background: 'var(--bg)',
    border: '1.5px solid var(--border)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: 'var(--muted)',
    fontSize: '15px',
  },
  profileChip: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '4px 10px 4px 4px',
    background: 'var(--bg)',
    border: '1.5px solid var(--border)',
    borderRadius: '999px',
  }
};

export default Header;