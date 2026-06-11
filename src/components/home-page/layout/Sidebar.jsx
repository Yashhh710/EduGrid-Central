import React from 'react';
import { NAV_ITEMS } from '../data';

export default function Sidebar({ activePanel, setActivePanel }) {
  return (
    <aside className="sidebar">
      <div className="logo-mark">EG</div>
      <ul className="nav-list">
        {NAV_ITEMS.map(item => (
          <li 
            key={item.id} 
            className={`nav-item ${activePanel === item.id ? 'active' : ''}`}
            onClick={() => setActivePanel(item.id)}
          >
            <a href="#" onClick={e => e.preventDefault()}>
              <i className={`fa-solid ${item.icon}`}></i>
            </a>
            <span className="nav-tooltip">{item.label}</span>
          </li>
        ))}
      </ul>
      <div className="sidebar-bottom">
        <a href="#/" onClick={(e) => { e.preventDefault(); window.location.hash = '#/'; }}>
          <i className="fa-solid fa-right-from-bracket"></i>
        </a>
      </div>
    </aside>
  );
}