import React from 'react';

export default function Hero({ userName }) {
  return (
    <div className="welcome-banner">
      <h1>Hello, <span>{userName}</span>! 👋</h1>
      <p>You're making great progress. Keep it up!</p>
      <div className="banner-chips">
        <div className="banner-chip"><i className="fa-solid fa-fire"></i> 7-day streak</div>
        <div className="banner-chip"><i className="fa-solid fa-trophy"></i> 6 completed</div>
        <div className="banner-chip"><i className="fa-solid fa-clock"></i> 4 in progress</div>
      </div>
    </div>
  );
}
