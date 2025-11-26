import React, { useEffect, useState } from 'react';
import Logo from '../assets/logo.png';
import introVideo from '../assets/intro.mp4';
import introSound from '../assets/introSound.mp3';
import './Intro.css';

export default function Intro({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const audio = new Audio(introSound);
    audio.play().catch(e => console.log('Autoplay blocked', e));

    const timer = setTimeout(() => {
      setFadeOut(true); // ابدأ Fade-out
      setTimeout(() => {
        audio.pause();
        onFinish(); // بعد انتهاء Fade-out، اعرض الموقع الأساسي
      }, 1000); // مدة الانسياب Fade 1s
    }, 5000); // مدة الفيديو أو مدة العرض المطلوب

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`intro-container ${fadeOut ? 'fade-out' : ''}`}>
      <video src={introVideo} autoPlay muted className="intro-video" />
      <div className="logo-wrapper">
        <img src={Logo} alt="Logo" className="logo-img" />
      </div>
    </div>
  );
}
