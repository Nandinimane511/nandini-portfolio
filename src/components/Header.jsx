import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { 
  FaHome, 
  FaUser, 
  FaGraduationCap, 
  FaBriefcase, 
  FaCode,
  FaTools,
  FaEnvelope
} from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const resumeHref = '/resume.pdf';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'education', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: <FaHome /> },
    { id: 'about', label: 'About', icon: <FaUser /> },
    { id: 'education', label: 'Education', icon: <FaGraduationCap /> },
    { id: 'experience', label: 'Experience', icon: <FaBriefcase /> },
    { id: 'projects', label: 'Projects', icon: <FaCode /> },
    { id: 'skills', label: 'Skills', icon: <FaTools /> },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope /> }
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container" data-reveal>
        <div className="logo">
          <div className="logo-text-container">
            <span className="logo-text">NM</span>
            <span className="logo-full">Nandini Mane</span>
          </div>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth={true}
                duration={500}
                offset={-80}
                className={activeSection === item.id ? 'active' : ''}
                spy={true}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
                <span className="nav-indicator"></span>
              </Link>
            </li>
          ))}
          <li className="resume-container">
            <a 
              href={resumeHref}
              className="resume-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiDownload className="btn-icon" />
              <span>Resume</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-nav-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />
      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Mobile navigation">
        <div className="mobile-nav-header">
          <div className="mobile-nav-title">Menu</div>
          <button type="button" className="mobile-nav-close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
            ×
          </button>
        </div>
<div className="mobile-nav-links">
  {navItems.map((item) => (
    <Link
      key={item.id}
      to={item.id}
      smooth={true}
      duration={500}
      offset={-80}
      className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
      onClick={() => setMenuOpen(false)}
    >
      <span className="nav-icon">{item.icon}</span>
      <span className="nav-label">{item.label}</span>
    </Link>
  ))}

  {/* Resume Download */}
  <a
    href="/resume.pdf"               // public folder file
    className="mobile-resume-btn"
    download="resume.pdf" // force download
    onClick={() => setMenuOpen(false)}
  >
    <HiDownload className="btn-icon" />
    <span>Resume</span>
  </a>
</div>

      </div>
    </header>
  );
};

export default Header;