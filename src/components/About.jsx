import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Counter from './Counter';

const About = () => {
  const resumeHref = '/resume.pdf';

  const downloadPDFResume = () => {
    // Create a link and trigger download
    const link = document.createElement('a');
    link.href = resumeHref; // file is in public/
    link.download = 'Nandini_Mane_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadSummaryCard = () => {
    // Download the same PDF for now
    downloadPDFResume();
  };

  return (
    <section id="about" className="section" data-reveal>
      <div className="container">
        <motion.div 
          className="about-section"
          data-reveal
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          
          <motion.div 
            className="about-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-counters">
              <div className="counter-item" data-reveal>
                <h4>Projects</h4>
                <div className="counter-wrap">
                  <Counter end={3} duration={1200} />
                </div>
              </div>

              <div className="counter-item" data-reveal>
                <h4>Experience (months)</h4>
                <div className="counter-wrap">
                  <Counter end={12} duration={1400} />
                </div>
              </div>

              <div className="counter-item" data-reveal>
                <h4>Open Source</h4>
                <div className="counter-wrap">
                  <Counter end={5} duration={1000} />
                </div>
              </div>
            </div>

            <p className="about-text">
              As a Computer Engineering student, I combine strong academics with hands-on project experience in full-stack development using Java, HTML/CSS, JavaScript, React, Node.js, and MySQL. I also have growing expertise in AI/ML, including data preprocessing, model training, and automation.
            </p>
            
            <p className="about-text">
              I'm adaptable, collaborative, and have strengthened my teamwork through leadership roles. My creativity in art and design helps me bring innovative and user-focused solutions to every project.
            </p>
          </motion.div>
          
          {/* Downloadable Resume Card */}
          <motion.div
            className="summary-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="card-header">
              <h3 className="card-title">Professional Summary Card</h3>
              <button 
                className="download-btn"
                onClick={downloadSummaryCard}
                aria-label="Download summary card"
              >
                <Download size={16} />
                <span>Download as PDF</span>
              </button>
            </div>
            
            <div className="card-grid">
              <div className="card-item">
                <span className="card-label">Name:</span>
                <span className="card-value">Nandini Mane</span>
              </div>
              <div className="card-item">
                <span className="card-label">Education:</span>
                <span className="card-value">B.E. Computer Engineering (CGPA: 8.25)</span>
              </div>
              <div className="card-item">
                <span className="card-label">Tech Stack:</span>
                <span className="card-value">Full-stack (React, Node.js, MySQL), AI/ML (PyTorch, OpenCV)</span>
              </div>
              <div className="card-item">
                <span className="card-label">Key Projects:</span>
                <span className="card-value">Car Rental System, Deep Fake Detection, Medical Inventory Management</span>
              </div>
              <div className="card-item">
                <span className="card-label">Contact:</span>
                <span className="card-value">+91-9021461293 | nandinimane230@gmail.com</span>
              </div>
              <div className="card-item">
                <span className="card-label">LinkedIn:</span>
                <span className="card-value">linkedin.com/in/nandini-mane-757020280</span>
              </div>
            </div>
          </motion.div>
          
          {/* Additional Download Button */}
          <motion.div
            className="resume-download-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="download-prompt">
              Want the complete version? Download my full resume:
            </p>
            
            <motion.button 
              className="full-resume-button"
              onClick={downloadPDFResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download Full Resume PDF
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;