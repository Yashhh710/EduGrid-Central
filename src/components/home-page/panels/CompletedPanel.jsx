import React, { useState } from 'react';

const completedCourses = [
  {
    title: 'UI/UX Design',
    description: 'Build user-centered interfaces with practical UX research and polished visuals.',
    date: 'Jan 15, 2025',
    duration: '32h',
    progress: '100%',
    certificateId: 'EG-UIX-2025',
    badge: 'Design Expert',
    certificateImage: '/models/cer1.png',
  },
  {
    title: 'Graphic Design Essentials',
    description: 'Learn visual hierarchy, color systems, and modern branding techniques.',
    date: 'Feb 20, 2025',
    duration: '28h',
    progress: '100%',
    certificateId: 'EG-GDE-2025',
    badge: 'Creative Pro',
    certificateImage: '/models/cer2.png',
  },
  {
    title: 'Video Editing',
    description: 'Master editing workflows, transitions, and storytelling for engaging videos.',
    date: 'Mar 10, 2025',
    duration: '24h',
    progress: '100%',
    certificateId: 'EG-VID-2025',
    badge: 'Editing Master',
    certificateImage: '/models/cer3.png',
  },
  {
    title: '3D Modeling with Blender',
    description: 'Create stunning 3D scenes and assets with Blender’s powerful toolset.',
    date: 'Apr 05, 2025',
    duration: '30h',
    progress: '100%',
    certificateId: 'EG-BLD-2025',
    badge: 'Blender Artist',
    certificateImage: '/models/cer4.png',
  },
  {
    title: 'Digital Marketing Strategy',
    description: 'Plan campaigns, analyze metrics, and grow your brand with modern marketing tactics.',
    date: 'May 18, 2025',
    duration: '26h',
    progress: '100%',
    certificateId: 'EG-DMS-2025',
    badge: 'Marketing Strategist',
    certificateImage: '/models/cer5.png',
  },
  {
    title: 'AI Agent Development',
    description: 'Build intelligent assistants using AI workflows, automation, and evaluation best practices.',
    date: 'Jun 02, 2025',
    duration: '34h',
    progress: '100%',
    certificateId: 'EG-AID-2025',
    badge: 'AI Developer',
    certificateImage: '/models/cer6.png',
  },
];

export default function CompletedPanel() {
  const [activeCertificate, setActiveCertificate] = useState(null);

  const handleViewCertificate = (course) => {
    setActiveCertificate(course);
  };

  const handleDownloadCertificate = (certificateImage, courseTitle) => {
    const link = document.createElement('a');
    link.href = certificateImage;
    link.download = `${courseTitle.replace(/\s+/g, '-')}-certificate.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const closeCertificateModal = () => {
    setActiveCertificate(null);
  };

  return (
    <div className="completed-page">
      <div className="completed-hero">
        <div>
          <div className="completed-tag">Achievements unlocked</div>
          <h1>Completed Courses</h1>
          <p>Track certificates, completion dates, and course details for your learning progress.</p>
        </div>
      </div>

      <div className="completed-stats-grid">
        <div className="completed-stat-card">
          <div className="completed-stat-value">6</div>
          <div className="completed-stat-label">Completed courses</div>
        </div>
        <div className="completed-stat-card">
          <div className="completed-stat-value">6</div>
          <div className="completed-stat-label">Certificates earned</div>
        </div>
        <div className="completed-stat-card">
          <div className="completed-stat-value">150+</div>
          <div className="completed-stat-label">Learning hours</div>
        </div>
        <div className="completed-stat-card">
          <div className="completed-stat-value">100%</div>
          <div className="completed-stat-label">Completion rate</div>
        </div>
      </div>

      <div className="completed-cards-grid">
        {completedCourses.map((course, index) => (
          <article key={course.certificateId || index} className="completed-course-card">
            <div className="completed-course-meta no-thumb">
              <div>
                <div className="completed-course-title">{course.title}</div>
                <p className="completed-course-desc">{course.description}</p>
              </div>
              <div className="completed-course-badge">{course.badge}</div>
            </div>

            <div className="completed-course-row">
              <div className="completed-course-detail">
                <span>Finished</span>
                <strong>{course.date}</strong>
              </div>
              <div className="completed-course-detail">
                <span>Duration</span>
                <strong>{course.duration}</strong>
              </div>
            </div>

            <div className="completed-course-row">
              <div className="completed-course-detail">
                <span>Certificate</span>
                <strong>{course.certificateId}</strong>
              </div>
              <div className="completed-course-detail">
                <span>Progress</span>
                <strong>{course.progress}</strong>
              </div>
            </div>

            <div className="completed-course-actions">
              <button type="button" className="completed-action-btn" onClick={() => handleViewCertificate(course)}>
                View certificate
              </button>
              <button type="button" className="completed-download-btn" onClick={() => handleDownloadCertificate(course.certificateImage, course.title)}>
                Download
              </button>
            </div>
          </article>
        ))}
      </div>

      {activeCertificate && (
        <div className="completed-modal-overlay" onClick={closeCertificateModal}>
          <div className="completed-modal" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="completed-modal-close" onClick={closeCertificateModal}>
              ×
            </button>
            <div className="completed-modal-header">
              <div>
                <div className="completed-course-title">{activeCertificate.title}</div>
                <p className="completed-course-desc">{activeCertificate.certificateId}</p>
              </div>
            </div>
            <div className="completed-modal-image-wrap">
              <img
                src={activeCertificate.certificateImage}
                alt={`${activeCertificate.title} certificate`}
              />
            </div>
            <div className="completed-modal-actions">
              <button
                type="button"
                className="completed-action-btn"
                onClick={() => handleDownloadCertificate(activeCertificate.certificateImage, activeCertificate.title)}
              >
                Download certificate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
