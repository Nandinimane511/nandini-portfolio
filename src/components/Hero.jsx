import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileDownload, FaArrowRight } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* Left Social Links */}
      <motion.div 
        className="social-links"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/nandini-mane" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
      </motion.div>

      {/* Hero Content */}
      <div className="hero-content">
        <motion.h4 
          className="hero-greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, my name is
        </motion.h4>
        
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Nandini Mane.
        </motion.h1>
        
        <motion.h2 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Computer Engineering Student!
        </motion.h2>
        
        <motion.p 
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Passionate about building innovative solutions with modern technologies. 
          Currently pursuing Computer Engineering with a focus on software development, 
          machine learning, and cloud computing.
        </motion.p>
        
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href="/nandini mane 1 page resume.pdf" 
            className="btn-primary"
            download
          >
            <FaFileDownload /> View Resume
          </a>
          <a href="#contact" className="btn-secondary">
            Get In Touch <FaArrowRight />
          </a>
        </motion.div>
      </div>

      {/* Right Email Link */}
      <motion.a 
        href="mailto:nandinimane230@gmail.com"
        className="email-link"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        nandinimane230@gmail.com
      </motion.a>
    </section>
  );
};

export default Hero;