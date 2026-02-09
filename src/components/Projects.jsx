import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaGithub, 
  FaExternalLinkAlt,
  FaServer,
  FaRobot,
  FaCar,
  FaCode,
  FaLayerGroup
} from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      id: 1,
      title: "MEDSTOCK - Medical Inventory Management",
      description: "A full-stack Medical Inventory Management System with secure role-based access control for hospitals and clinics.",
      technologies: ["React.js", "Node.js", "MySQL", "Bootstrap"],
      github: "https://github.com/dnm10/MedStock",
      demo: "http://localhost:3000/",
      icon: <FaServer />,
      color: "var(--blue)",
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
      color: "var(--green)",
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
      color: "var(--orange)",
      features: ["OOP Design", "Automated Invoicing", "Booking Management"]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

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

        <div className="projects-container">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card-wrapper"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: index * 0.2 }}
            >
              <motion.div 
                className="project-card"
                whileHover={{ y: -10 }}
              >
                <div className="project-card-inner">
                <div className="project-header">
                  <div className="project-icon" style={{ background: `${project.color}20`, color: project.color }}>
                    {project.icon}
                  </div>
                  <div className="project-title-container">
                    <h3>{project.title}</h3>
                    <div className="project-category">Full-stack Application</div>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <div className="features-title">
                    <FaLayerGroup />
                    <span>Key Features</span>
                  </div>
                  <div className="features-list">
                    {project.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="feature-tag"
                        style={{ background: `${project.color}15`, color: project.color }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-tech-stack">
                  <div className="tech-stack-title">
                    <FaCode />
                    <span>Technologies</span>
                  </div>
                  <div className="tech-tags">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  <a 
                    href={project.github}
                    className="project-link github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    <span>View Code</span>
                  </a>
                  <a 
                    href={project.demo}
                    className="project-link demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background: project.color }}
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;