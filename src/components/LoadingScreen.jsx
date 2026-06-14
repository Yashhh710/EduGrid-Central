import React, { useEffect, useState } from 'react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@800&display=swap');

  .edugrid-loading-overlay {
    position: fixed;
    inset: 0;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
                visibility 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .edugrid-loading-overlay.hidden {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }

  .edugrid-loading-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1),
                opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .edugrid-loading-overlay.hidden .edugrid-loading-wrapper {
    transform: scale(1.15);
    opacity: 0;
  }

  .edugrid-svg {
    width: 220px;
    height: 220px;
    overflow: visible;
    display: block;
  }

  .edugrid-path {
    stroke: #fbfbfb;
    stroke-width: 3px;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-opacity: 1;
  }

  @keyframes eg-moveCapTop {
    0%   { fill: #fe2e64; }
    15%  { fill: #ffff00; transform: translate(80px, -100px); }
    30%  { fill: #2efef7; transform: translate(-60px, 50px); }
    50%  { fill: #110a29; transform: translate(0, 0); }
    100% { fill: #110a29; }
  }
  @keyframes eg-moveCapLeft {
    0%   { fill: #00ff80; }
    10%  { fill: #ac58fa; transform: translate(-120px, 80px); }
    25%  { fill: #f5a9bc; transform: translate(50px, 30px); }
    40%  { fill: #291f6c; transform: translate(0, 0); }
    100% { fill: #291f6c; }
  }
  @keyframes eg-moveCapRight {
    0%   { fill: #fe9a2e; }
    12%  { fill: #00ffbf; transform: translate(120px, 60px); }
    28%  { fill: #ff4000; transform: translate(-40px, -50px); }
    42%  { fill: #520d4f; transform: translate(0, 0); }
    100% { fill: #520d4f; }
  }
  @keyframes eg-moveCapFront {
    0%   { fill: #ffff00; }
    8%   { fill: #2e64fe; transform: translate(-80px, 150px); }
    20%  { fill: #81f7be; transform: translate(40px, 80px); }
    35%  { fill: #691751; transform: translate(0, 0); }
    100% { fill: #691751; }
  }
  @keyframes eg-moveCapBackLeft {
    0%   { fill: #0040ff; }
    15%  { fill: #fa58f4; transform: translate(-100px, -80px); }
    30%  { fill: #fe9a2e; transform: translate(60px, 40px); }
    45%  { fill: #8f335d; transform: translate(0, 0); }
    100% { fill: #8f335d; }
  }
  @keyframes eg-moveCapBackRight {
    0%   { fill: #ff0040; }
    10%  { fill: #a9f5d0; transform: translate(100px, -60px); }
    25%  { fill: #0b3b17; transform: translate(-30px, 20px); }
    38%  { fill: #b90149; transform: translate(0, 0); }
    100% { fill: #b90149; }
  }
  @keyframes eg-moveBrimLeft {
    0%   { fill: #cc2efa; }
    12%  { fill: #00ff80; transform: translate(-150px, 100px); }
    25%  { fill: #fe9a2e; transform: translate(70px, 50px); }
    38%  { fill: #a70c29; transform: translate(0, 0); }
    100% { fill: #a70c29; }
  }
  @keyframes eg-moveBrimRight {
    0%   { fill: #00ff40; }
    15%  { fill: #ac58fa; transform: translate(150px, 80px); }
    30%  { fill: #f5a9bc; transform: translate(-50px, -20px); }
    42%  { fill: #8d004c; transform: translate(0, 0); }
    100% { fill: #8d004c; }
  }
  @keyframes eg-moveBrimFrontLeft {
    0%   { fill: #4b8a08; }
    10%  { fill: #81f7be; transform: translate(-80px, 120px); }
    25%  { fill: #df0174; transform: translate(30px, 40px); }
    38%  { fill: #ad0f09; transform: translate(0, 0); }
    100% { fill: #ad0f09; }
  }
  @keyframes eg-moveBrimFrontRight {
    0%   { fill: #f78181; }
    18%  { fill: #00ffbf; transform: translate(100px, 100px); }
    32%  { fill: #3a2f0b; transform: translate(-20px, 40px); }
    45%  { fill: #6e064e; transform: translate(0, 0); }
    100% { fill: #6e064e; }
  }
  @keyframes eg-moveTopButton {
    0%   { fill: #dba901; }
    15%  { fill: #6e6e6e; transform: translate(0px, -80px); }
    28%  { fill: #a9f5d0; transform: translate(0px, -20px); }
    38%  { fill: #5c1561; transform: translate(0, 0); }
    100% { fill: #5c1561; }
  }
  @keyframes eg-moveTasselTop {
    0%   { fill: #2efe2e; }
    10%  { fill: #f5a9e1; transform: translate(200px, -100px); }
    22%  { fill: #7401df; transform: translate(-30px, 20px); }
    32%  { fill: #881754; transform: translate(0, 0); }
    100% { fill: #881754; }
  }
  @keyframes eg-moveTasselMid {
    0%   { fill: #0b3b39; }
    15%  { fill: #4b088a; transform: translate(180px, 80px); }
    28%  { fill: #a9d0f5; transform: translate(-20px, -10px); }
    40%  { fill: #a71d67; transform: translate(0, 0); }
    100% { fill: #a71d67; }
  }
  @keyframes eg-moveTasselEnd {
    0%   { fill: #f5a9bc; }
    12%  { fill: #f2f5a9; transform: translate(100px, 200px); }
    25%  { fill: #bca9f5; transform: translate(-20px, 30px); }
    35%  { fill: #891754; transform: translate(0, 0); }
    100% { fill: #891754; }
  }
  @keyframes eg-moveBrimDetail1 {
    0%   { fill: #08298a; }
    10%  { fill: #8181f7; transform: translate(-200px, 80px); }
    22%  { fill: #8181f7; transform: translate(40px, -20px); }
    32%  { fill: #a70b29; transform: translate(0, 0); }
    100% { fill: #a70b29; }
  }
  @keyframes eg-moveBrimDetail2 {
    0%   { fill: #fe2e64; }
    12%  { fill: #610b21; transform: translate(180px, -60px); }
    28%  { fill: #e6e6e6; transform: translate(-60px, 40px); }
    40%  { fill: #ed6708; transform: translate(0, 0); }
    100% { fill: #ed6708; }
  }

  #eg-capTop        { animation: eg-moveCapTop        6s infinite; }
  #eg-capLeft       { animation: eg-moveCapLeft       6s infinite; }
  #eg-capRight      { animation: eg-moveCapRight      6s infinite; }
  #eg-capFront      { animation: eg-moveCapFront      6s infinite; }
  #eg-capBackLeft   { animation: eg-moveCapBackLeft   6s infinite; }
  #eg-capBackRight  { animation: eg-moveCapBackRight  6s infinite; }
  #eg-brimLeft      { animation: eg-moveBrimLeft      6s infinite; }
  #eg-brimRight     { animation: eg-moveBrimRight     6s infinite; }
  #eg-brimFrontLeft { animation: eg-moveBrimFrontLeft  6s infinite; }
  #eg-brimFrontRight{ animation: eg-moveBrimFrontRight 6s infinite; }
  #eg-topButton     { animation: eg-moveTopButton     6s infinite; }
  #eg-tasselTop     { animation: eg-moveTasselTop     6s infinite; }
  #eg-tasselMid     { animation: eg-moveTasselMid     6s infinite; }
  #eg-tasselEnd     { animation: eg-moveTasselEnd     6s infinite; }
  #eg-brimDetail1   { animation: eg-moveBrimDetail1   6s infinite; }
  #eg-brimDetail2   { animation: eg-moveBrimDetail2   6s infinite; }

  .edugrid-loading-text {
    font-size: 30px;
    font-family: "Nunito", sans-serif;
    font-weight: 800;
    text-align: center;
    color: #1a1a2e;
  }
  .edugrid-loading-text span {
    display: inline-block;
    margin: 0 -0.05em;
    animation: eg-blur 1.2s infinite alternate;
  }
  .edugrid-loading-text span:nth-child(2) { animation-delay: 0.2s; }
  .edugrid-loading-text span:nth-child(3) { animation-delay: 0.4s; }
  .edugrid-loading-text span:nth-child(4) { animation-delay: 0.6s; }
  .edugrid-loading-text span:nth-child(5) { animation-delay: 0.8s; }
  .edugrid-loading-text span:nth-child(6) { animation-delay: 1.0s; }
  .edugrid-loading-text span:nth-child(7) { animation-delay: 1.2s; }

  @keyframes eg-blur {
    0%   { filter: blur(0);   opacity: 1;   }
    100% { filter: blur(5px); opacity: 0.2; }
  }

  /* Main app page-in animation */
  @keyframes eg-pageIn {
    0%   { opacity: 0; transform: translateY(24px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .edugrid-app-enter {
    animation: eg-pageIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
  }

  @media (prefers-reduced-motion: reduce) {
    #eg-capTop, #eg-capLeft, #eg-capRight, #eg-capFront,
    #eg-capBackLeft, #eg-capBackRight, #eg-brimLeft, #eg-brimRight,
    #eg-brimFrontLeft, #eg-brimFrontRight, #eg-topButton,
    #eg-tasselTop, #eg-tasselMid, #eg-tasselEnd,
    #eg-brimDetail1, #eg-brimDetail2,
    .edugrid-loading-text span {
      animation: none;
    }
    .edugrid-loading-wrapper {
      transition: none;
    }
    .edugrid-app-enter {
      animation: none;
    }
  }
`;

export default function LoadingScreen({ duration = 2500, onDone }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const hideTimer = setTimeout(() => setHidden(true), duration);
    // onDone fires at the midpoint of the fade (300ms in) so the app
    // starts mounting while the loader is still fading — overlap = seamless.
    const doneTimer = setTimeout(() => onDone?.(), duration + 300);
    return () => {
      clearTimeout(hideTimer);
      clearTimeout(doneTimer);
    };
  }, [duration, onDone]);

  return (
    <>
      <style>{styles}</style>
      <div className={`edugrid-loading-overlay${hidden ? ' hidden' : ''}`}>
        <div className="edugrid-loading-wrapper">
          <svg
            viewBox="180 255 340 200"
            preserveAspectRatio="xMidYMid meet"
            className="edugrid-svg"
          >
            <path id="eg-capTop"         className="edugrid-path" d="M 350,260 L 450,310 L 350,360 L 250,310 Z"/>
            <path id="eg-capLeft"        className="edugrid-path" d="M 250,310 L 350,360 L 320,430 L 220,380 Z"/>
            <path id="eg-capRight"       className="edugrid-path" d="M 450,310 L 350,360 L 380,430 L 480,380 Z"/>
            <path id="eg-capFront"       className="edugrid-path" d="M 320,430 L 350,360 L 380,430 L 350,450 Z"/>
            <path id="eg-capBackLeft"    className="edugrid-path" d="M 250,310 L 290,295 L 350,360 L 320,430 Z"/>
            <path id="eg-capBackRight"   className="edugrid-path" d="M 450,310 L 410,295 L 350,360 L 380,430 Z"/>
            <path id="eg-brimLeft"       className="edugrid-path" d="M 350,360 L 250,310 L 180,330 L 280,385 Z"/>
            <path id="eg-brimRight"      className="edugrid-path" d="M 350,360 L 450,310 L 520,330 L 420,385 Z"/>
            <path id="eg-brimFrontLeft"  className="edugrid-path" d="M 280,385 L 350,360 L 350,380 L 295,400 Z"/>
            <path id="eg-brimFrontRight" className="edugrid-path" d="M 350,360 L 420,385 L 405,400 L 350,380 Z"/>
            <path id="eg-topButton"      className="edugrid-path" d="M 345,258 L 355,258 L 358,268 L 350,272 L 342,268 Z"/>
            <path id="eg-tasselTop"      className="edugrid-path" d="M 448,308 L 460,308 L 465,350 L 455,350 Z"/>
            <path id="eg-tasselMid"      className="edugrid-path" d="M 455,350 L 465,350 L 470,400 L 460,400 Z"/>
            <path id="eg-tasselEnd"      className="edugrid-path" d="M 448,398 L 478,398 L 485,430 L 441,430 Z"/>
            <path id="eg-brimDetail1"    className="edugrid-path" d="M 250,310 L 220,320 L 240,350 L 270,340 Z"/>
            <path id="eg-brimDetail2"    className="edugrid-path" d="M 450,310 L 480,320 L 460,350 L 430,340 Z"/>
          </svg>

          <div className="edugrid-loading-text">
            {'EDUGRID'.split('').map((letter, i) => (
              <span key={i}>{letter}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
