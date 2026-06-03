import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaServer, FaRobot, FaCar, FaCode, FaLayerGroup } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web Development', 'AI/ML', 'Other'];

  const projects = [
    {
      id: 1,
      title: "MEDSTOCK - Medical Inventory Management",
      description: "A full-stack Medical Inventory Management System with secure role-based access control for hospitals and clinics.",
      technologies: ["React.js", "Node.js", "MySQL", "Bootstrap"],
      github: "#",
      demo: "#",
      icon: <FaServer />,
      gradient: "linear-gradient(135deg, #3B82F6, #6366F1)",
      category: "Web Development",
      features: ["Role-based Access", "Real-time Tracking", "Inventory Analytics"]
    },
    {
      id: 2,
      title: "Deep Fake Detection",
      description: "AI-powered DeepFake Detection model using ResNet-18 with transfer learning for real/fake face classification.",
      technologies: ["Python", "PyTorch", "OpenCV", "TensorFlow"],
      github: "#",
      demo: "#",
      icon: <FaRobot />,
      gradient: "linear-gradient(135deg, #10B981, #06B6D4)",
      category: "AI/ML",
      features: ["CNN Architecture", "Transfer Learning", "High Accuracy"]
    },
    {
      id: 3,
      title: "Car Rental System",
      description: "Comprehensive Car Rental System in Java using OOP concepts for vehicle management, bookings, and invoices.",
      technologies: ["Java", "OOP", "Swing", "MySQL"],
      github: "#",
      demo: "#",
      icon: <FaCar />,
      gradient: "linear-gradient(135deg, #F59E0B, #EF4444)",
      category: "Other",
      features: ["OOP Design", "Automated Invoicing", "Booking Management"]
    }
  ];

  const filteredProjects = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section projects-section" ref={ref} data-reveal>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">My Creative Work</p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="projects-filter"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <div className="projects-container">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                className="project-card-wrapper"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.15, type: "spring", stiffness: 100, damping: 15 }}
                layout
              >
                <motion.div className="project-card" whileHover={{ y: -10 }}>
                  <div className="project-card-inner">
                    <div className="project-header">
                      <div className="project-icon" style={{ background: `${project.gradient.includes('#3B82F6') ? 'rgba(59,130,246,0.12)' : project.gradient.includes('#10B981') ? 'rgba(16,185,129,0.12)' : 'rgba(245,158,11,0.12)'}` }}>
                        <span style={{ background: project.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                          {project.icon}
                        </span>
                      </div>
                      <div className="project-title-container">
                        <h3>{project.title}</h3>
                        <div className="project-category">{project.category}</div>
                      </div>
                    </div>

                    <p className="project-description">{project.description}</p>

                    <div className="project-features">
                      <div className="features-title"><FaLayerGroup /><span>Key Features</span></div>
                      <div className="features-list">
                        {project.features.map((feature, idx) => (
                          <span key={idx} className="feature-tag" style={{ background: 'rgba(59,130,246,0.08)', color: '#60A5FA' }}>
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="project-tech-stack">
                      <div className="tech-stack-title"><FaCode /><span>Technologies</span></div>
                      <div className="tech-tags">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>

                    <div className="project-links">
                      <a href={project.github} className="project-link github" target="_blank" rel="noopener noreferrer">
                        <FaGithub /><span>View Code</span>
                      </a>
                      <a href={project.demo} className="project-link demo" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt /><span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;