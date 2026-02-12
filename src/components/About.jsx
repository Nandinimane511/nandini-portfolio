import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Counter from './Counter';

const About = () => {
  const resumeHref = 'resume.pdf';

  const downloadPDFResume = () => {
    const link = document.createElement('a');
    link.href = resumeHref;
    link.download = 'Nandini_Mane_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

            <div className="about-grid">
              <div className="about-card">
                <h3 className="about-card-title">Who I Am</h3>
                <p className="about-card-text">
                  A Computer Engineering student who blends strong academics with hands‑on project work
                  in full‑stack development and AI/ML. I enjoy turning ideas into polished, user‑friendly
                  products.
                </p>
              </div>

              <div className="about-card">
                <h3 className="about-card-title">What I Build</h3>
                <p className="about-card-text">
                  End‑to‑end web applications using React, Node.js and SQL/NoSQL databases, plus ML
                  systems for tasks like deepfake detection and automation of repetitive workflows.
                </p>
              </div>

              <div className="about-card">
                <h3 className="about-card-title">How I Work</h3>
                <p className="about-card-text">
                  I care about clean architecture, readable code, and consistent UI/UX. I collaborate
                  closely with teams, communicate clearly, and iterate quickly based on feedback.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Professional Summary Card */}
          <motion.div
            className="summary-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="card-header">
              <h3 className="card-title">Professional Summary</h3>
              <button 
                className="download-btn"
                onClick={downloadPDFResume}
                aria-label="Download professional summary as PDF"
              >
                <Download size={16} />
                <span>Download Summary</span>
              </button>
            </div>
            
            <div className="card-grid">
              <div className="card-item">
                <span className="card-label">Role</span>
                <span className="card-value">Full‑Stack & AI/ML Developer in training</span>
              </div>
              <div className="card-item">
                <span className="card-label">Education</span>
                <span className="card-value">B.E. Computer Engineering · CGPA 8.25</span>
              </div>
              <div className="card-item">
                <span className="card-label">Core Skills</span>
                <span className="card-value">
                  React · Node.js · Java · Python · SQL · Git · Machine Learning
                </span>
              </div>
              <div className="card-item">
                <span className="card-label">Notable Projects</span>
                <span className="card-value">
                  MEDSTOCK (inventory), Deep Fake Detection, Car Rental System
                </span>
              </div>
              <div className="card-item">
                <span className="card-label">Contact</span>
                <span className="card-value">+91‑9021461293 · nandinimane230@gmail.com</span>
              </div>
              <div className="card-item">
                <span className="card-label">LinkedIn</span>
                <span className="card-value">linkedin.com/in/nandini-mane-757020280</span>
              </div>
            </div>
          </motion.div>

          {/* Resume preview card with inline PDF + download */}
          <motion.div
            className="resume-embed-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="resume-embed-header">
              <div>
                <h3>Resume Snapshot</h3>
                <p>Preview my latest resume directly here or download a copy.</p>
              </div>
              <button
                type="button"
                className="resume-embed-download"
                onClick={downloadPDFResume}
              >
                <Download size={16} />
                <span>Download PDF</span>
              </button>
            </div>

            <div className="resume-embed-body">
              <div className="resume-embed-frame-wrapper">
                <iframe
                  src={resumeHref}
                  title="Nandini Mane Resume"
                  className="resume-embed-frame"
                />
              </div>
              <ul className="resume-embed-highlights">
                <li>✅ Full academic history and key projects in one page.</li>
                <li>✅ Clear breakdown of skills across web, backend and AI/ML.</li>
                <li>✅ Internship and leadership experience with measurable impact.</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;