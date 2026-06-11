import React, { useState, useEffect } from 'react';
import './homepage.css';

import Sidebar from './layout/sidebar';
import Nav from './layout/nav';
import RightPanel from './layout/rightPanel';

import HomePanel from './panels/HomePanel';
import CoursesPanel from './panels/CoursesPanel';
import QuizPanel from './panels/QuizPanel';
import GradebookPanel from './panels/GradebookPanel';
import StudentsPanel from './panels/StudentsPanel';
import SettingsPanel from './panels/SettingsPanel';
import CompletedPanel from './panels/CompletedPanel';
import { openPlayer } from '../../utils/openPlayer';

export default function HomeMaster() {
  const [activePanel, setActivePanel] = useState('home');
  const [searchText, setSearchText] = useState('');
  const [userName, setUserName] = useState('');
  const [courseProgress, setCourseProgress] = useState({});

  const parseDuration = (duration) => {
    if (!duration) return 0;
    const hours = Number((duration.match(/(\d+)\s*h/) || [0, 0])[1] || 0);
    const minutes = Number((duration.match(/(\d+)\s*m(?!s)/) || [0, 0])[1] || 0);
    const seconds = Number((duration.match(/(\d+)\s*s/) || [0, 0])[1] || 0);
    return hours * 3600 + minutes * 60 + seconds;
  };

  useEffect(() => {
    if (searchText.trim() !== '') {
      setActivePanel('courses');
    }
  }, [searchText]);

  useEffect(() => {
    try {
      const savedProgress = JSON.parse(localStorage.getItem('edu_course_progress') || '{}');
      setCourseProgress(savedProgress);
    } catch (e) {
      setCourseProgress({});
    }
  }, []);

  const openCompleted = () => {
    window.location.hash = '#/dashboard/completed';
    setActivePanel('completed');
  };

  const handleVideoClick = (course) => {
    const progressValue = Number(courseProgress[course.title] ?? course.progress ?? 0);
    const durationSeconds = parseDuration(course.videoDuration);
    const startSeconds = Math.floor((progressValue / 100) * durationSeconds);

    openPlayer({
      v: course.url,
      title: course.title,
      desc: course.desc,
      start: startSeconds,
      duration: course.videoDuration,
      progress: progressValue.toString(),
    });
  };

  return (
    <div className="shell">
      <Sidebar activePanel={activePanel} setActivePanel={setActivePanel} />
      
      <main className="main-wrap">
        <div className="content-area">
          <Nav 
            activePanel={activePanel} 
            searchText={searchText} 
            setSearchText={setSearchText} 
            userName={userName || 'Student'}
            onOpenCompleted={openCompleted}
          />
          
          {activePanel === 'home' && <HomePanel userName={userName || 'Student'} courseProgress={courseProgress} onVideoClick={handleVideoClick} />}
          {activePanel === 'courses' && <CoursesPanel searchQuery={searchText} onVideoClick={handleVideoClick} />}
          {activePanel === 'quiz' && <QuizPanel />}
          {activePanel === 'gradebook' && <GradebookPanel />}
          {activePanel === 'students' && <StudentsPanel />}
          {activePanel === 'settings' && <SettingsPanel />}
          {activePanel === 'completed' && <CompletedPanel />}
          
        </div>
        
        <RightPanel />
      </main>
    </div>
  );
}
