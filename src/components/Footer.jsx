import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaCoffee, FaReact } from 'react-icons/fa';
import { SiFramer } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer" data-reveal>
      <div className="footer-container" data-reveal>
        {/* Navigation Links */}
        <nav className="footer-links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Tech Stack Note */}
        <div className="footer-note">
          <div className="tech-icons">
            <motion.span 
              className="tech-icon"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              title="React"
            >
              <FaReact />
            </motion.span>
            <motion.span 
              className="tech-icon"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              title="Framer Motion"
            >
              <SiFramer />
            </motion.span>
          </div>
          <p>
            Built with <FaHeart className="heart-icon" /> 
            and <FaCoffee className="coffee-icon" />
          </p>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>© {currentYear} Nandini Mane. All rights reserved.</p>
          <p className="footer-subtext">
            Portfolio v1.0 • Mumbai, India
          </p>
        </div>

        {/* Back to Top */}
        <motion.a 
          href="#home"
          className="back-to-top"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          title="Back to top"
          aria-label="Back to top"
        >
          ↑
        </motion.a>
      </div>
    </footer>
  );
};

export default Footer;