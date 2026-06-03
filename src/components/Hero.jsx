import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileDownload, FaArrowRight, FaEye } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import ThreeBackground from './ThreeBackground';
import profileImg from '../assets/myphoto.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const resumeHref = 'resume.pdf';
  
  const texts = [
    "Full-Stack Developer",
    "Computer Engineering Student",
    "AI/ML Enthusiast",
    "Problem Solver"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];
      
      setDisplayText(isDeleting 
        ? fullText.substring(0, displayText.length - 1)
        : fullText.substring(0, displayText.length + 1)
      );
      
      setTypingSpeed(isDeleting ? 50 : 150);
      
      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, texts, typingSpeed]);

  return (
    <section id="home" className="hero">
      <div className="hero-three-background">
        <ThreeBackground />
      </div>
      
      {/* Left Social Links */}
      <motion.div 
        className="social-links"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <a href="https://github.com/Nandinimane511" target="_blank" rel="noopener noreferrer" title="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/nandini-mane-757020280" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="mailto:nandinimane230@gmail.com" title="Email">
          <HiMail />
        </a>
      </motion.div>

      {/* Hero Content */}
      <div className="hero-content">
        {/* Profile Image */}
        <motion.div 
          className="hero-profile-wrapper"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
          <img src={profileImg} alt="Nandini Mane" className="hero-profile-img" />
        </motion.div>

        <motion.h4 
          className="hero-greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          &lt;Hello World /&gt; I'm
        </motion.h4>
        
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Nandini <span className="highlight">Mane</span>.
        </motion.h1>
        
        <div className="typing-container">
          <motion.h2 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="typing-text">{displayText}</span>
            <span className="typing-cursor">|</span>
          </motion.h2>
        </div>
        
        <motion.p 
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          A passionate Computer Engineering student at Rajiv Gandhi Institute of Technology, 
          specializing in Full-Stack Development and AI/ML. I love building innovative 
          solutions that make a difference.
        </motion.p>
        
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a 
            href={resumeHref}
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            download="Nandini_Mane_Resume.pdf"
          >
            <FaFileDownload /> Download Resume
          </motion.a>
          <motion.a 
            href="#contact" 
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me <FaArrowRight />
          </motion.a>
          <motion.a 
            href="#projects" 
            className="btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEye /> View Projects
          </motion.a>
        </motion.div>
      </div>

      {/* Right Email Link */}
      <motion.a 
        href="mailto:nandinimane230@gmail.com"
        className="email-link"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        title="Send me an email"
      >
        nandinimane230@gmail.com
      </motion.a>

      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="scroll-indicator-mouse" />
        <span>SCROLL</span>
      </motion.div>
    </section>
  );
};

export default Hero;