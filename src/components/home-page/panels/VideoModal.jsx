import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SAMPLE_VIDEO_SRC = 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

function parseDuration(duration = '') {
  const hours = Number((duration.match(/(\d+)\s*h/) || [0, 0])[1] || 0);
  const minutes = Number((duration.match(/(\d+)\s*m(?!s)/) || [0, 0])[1] || 0);
  const seconds = Number((duration.match(/(\d+)\s*s/) || [0, 0])[1] || 0);
  return hours * 3600 + minutes * 60 + seconds;
}

function formatDuration(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  const parts = [];
  if (hrs) parts.push(`${hrs}h`);
  if (mins || hrs) parts.push(`${mins}m`);
  parts.push(`${secs}s`);
  return parts.join(' ');
}

export default function VideoModal({ onClose, onProgressSave }) {
  const [searchParams] = useSearchParams();
  const videoRef = useRef(null);
  const [videoLength, setVideoLength] = useState(0);
  const [progress, setProgress] = useState(0);

  const title = searchParams.get('title') || 'Course Video';
  const durationLabel = searchParams.get('duration') || '0m';
  const initialProgress = Number(searchParams.get('progress') || '0');

  const totalSeconds = useMemo(() => parseDuration(durationLabel), [durationLabel]);
  const completedSeconds = Math.round((progress / 100) * totalSeconds);
  const remainingSeconds = Math.max(0, totalSeconds - completedSeconds);
  const completedLabel = formatDuration(completedSeconds);
  const remainingLabel = formatDuration(remainingSeconds);
  const isComplete = progress >= 100;

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('edu_course_progress') || '{}');
      if (stored[title] !== undefined) {
        setProgress(Number(stored[title]));
      } else {
        setProgress(Math.min(100, Math.max(0, initialProgress)));
      }
    } catch (e) {
      setProgress(Math.min(100, Math.max(0, initialProgress)));
    }
  }, [title, initialProgress]);

  useEffect(() => {
    if (!videoRef.current || videoLength <= 0) return;
    const startPosition = Math.min(videoLength * (progress / 100), videoLength - 0.1);
    videoRef.current.currentTime = startPosition;
  }, [videoLength, progress]);

  const saveProgress = (titleKey, value) => {
    onProgressSave?.(titleKey, value);
    try {
      const stored = JSON.parse(localStorage.getItem('edu_course_progress') || '{}');
      stored[titleKey] = value;
      localStorage.setItem('edu_course_progress', JSON.stringify(stored));
    } catch (e) {}
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setVideoLength(videoRef.current.duration || 0);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current || videoLength <= 0) return;
    const fraction = Math.min(1, videoRef.current.currentTime / videoLength);
    const nextProgress = Math.min(100, Math.round(fraction * 100));
    if (nextProgress !== progress) {
      setProgress(nextProgress);
      saveProgress(title, nextProgress);
    }
  };

  const handleEnded = () => {
    setProgress(100);
    saveProgress(title, 100);
  };

  return (
    <div className="video-modal-overlay">
      <div className="video-modal-card">
        <div className="video-modal-header">
          <div>
            <h3>{title}</h3>
            <p>{isComplete ? 'Completed ✓' : `${progress}% completed`}</p>
          </div>
          <button className="video-modal-close" onClick={onClose}>✕</button>
        </div>

        <div className="video-progress-line">
          <div className="video-progress-line-fill" style={{ width: `${progress}%` }} />
          <span className="video-progress-text">{progress}%</span>
        </div>

        <div className="video-player-wrap-modal">
          <video
            ref={videoRef}
            controls
            onLoadedMetadata={handleLoadedMetadata}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleEnded}
            src={SAMPLE_VIDEO_SRC}
          />
        </div>

        <div className="video-stats-grid">
          <div>
            <div className="video-stat-label">Completed</div>
            <div className="video-stat-value">{completedLabel}</div>
          </div>
          <div>
            <div className="video-stat-label">Remaining</div>
            <div className="video-stat-value">{remainingLabel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
