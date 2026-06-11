import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingHome from './pages/Home.jsx';
import HomeMaster from './components/home-page/index.jsx';
import LoginMaster from './components/login-page/index.jsx';

function App() {
  const openLogin = () => {
    window.location.hash = '#/login';
  };

  const openLanding = () => {
    window.location.hash = '#/';
  };

  const openDashboard = (name, plan) => {
    const params = {};
    if (name) params.name = name;
    if (plan) params.plan = plan;
    const qs = Object.keys(params).length ? `?${new URLSearchParams(params).toString()}` : '';
    window.location.hash = `#/dashboard${qs}`;
  };

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingHome onOpenLogin={openLogin} />} />
        <Route path="/login" element={<LoginMaster onBack={openLanding} onNavigateHome={openDashboard} />} />
        <Route path="/dashboard/*" element={<HomeMaster />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;