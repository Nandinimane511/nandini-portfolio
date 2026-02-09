import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileDownload, FaArrowRight } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import ThreeBackground from './ThreeBackground';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const resumeHref = '/resume.pdf';
  
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
        transition={{ delay: 1, duration: 0.8 }}
      >
        <a href="https://github.com/Nandinimane511" target="_blank" rel="noopener noreferrer" title="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/nandini-mane-757020280" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="mailto:nandinimane230@gmail.com" className="email-social" title="Email">
          <HiMail />
        </a>
      </motion.div>

      {/* Hero Content - Left Side */}
      <div className="hero-content">
        <motion.h4 
          className="hero-greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          👋 Hello! I'm
        </motion.h4>
        
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Nandini <span className="highlight">Mane</span>.
        </motion.h1>
        
        <div className="typing-container">
          <motion.h2 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="typing-text">{displayText}</span>
            <span className="typing-cursor">|</span>
          </motion.h2>
        </div>
        
        <motion.p 
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          A passionate Computer Engineering student at Rajiv Gandhi Institute of Technology, 
          specializing in Full-Stack Development and AI/ML. I love building innovative 
          solutions that make a difference.
        </motion.p>
        
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
            Get In Touch <FaArrowRight />
          </motion.a>
        </motion.div>
      </div>

      {/* Right Email Link */}
      <motion.a 
        href="mailto:nandinimane230@gmail.com"
        className="email-link"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        title="Send me an email"
      >
        nandinimane230@gmail.com
      </motion.a>

    </section>
  );
};

export default Hero;