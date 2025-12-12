import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { 
  FaHome, 
  FaUser, 
  FaGraduationCap, 
  FaBriefcase, 
  FaCode,
  FaTools,
  FaEnvelope,
  FaFileDownload
} from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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
      <nav className="nav-container">
        <div className="logo">
          <span className="logo-text">NM</span>
          <span className="logo-full">Nandini Mane</span>
        </div>
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
              href="/nandini mane 1 page resume.pdf" 
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
    </header>
  );
};

export default Header;