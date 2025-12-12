import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 Nandini Mane. All rights reserved.</p>
          <p>Built with React & ❤️</p>
          <div className="footer-social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/nandini-mane" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <BsInstagram />
            </a>
            <a href="mailto:nandinimane230@gmail.com">
              <HiMail />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Import icons for footer
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { BsInstagram } from 'react-icons/bs';

export default App;