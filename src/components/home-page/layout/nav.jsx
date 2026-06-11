import React from 'react';

const panelTitles = {
  home: 'Dashboard',
  courses: 'All Courses',
  video: 'Now Playing',
  quiz: 'Quiz Creator',
  gradebook: 'Gradebook',
  students: 'Students',
  settings: 'Settings',
  completed: 'Completed Courses'
};

export default function Nav({ activePanel, searchText, setSearchText, userName, onOpenCompleted }) {
  const displayTitle = searchText ? `Search: ${searchText}` : (panelTitles[activePanel] || 'Dashboard');

  return (
    <div className="topbar">
      <div className="page-title">{displayTitle}</div>
      <div className="search-wrap">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input 
          type="text" 
          placeholder="Search courses…" 
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
      </div>
      <div className="topbar-actions">
        <button type="button" className="icon-btn" onClick={onOpenCompleted}>
          <i className="fa-solid fa-trophy"></i>
        </button>
        <div className="profile-chip">
          <img src="https://i.pinimg.com/736x/da/59/64/da59647bd31dd524c09991cb89949804.jpg" alt="Profile" />
          <span>{userName}</span>
        </div>
      </div>
    </div>
  );
}
