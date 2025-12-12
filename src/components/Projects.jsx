import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaGithub, 
  FaExternalLinkAlt,
  FaServer,
  FaRobot,
  FaCar,
  FaDatabase,
  FaCode,
  FaLayerGroup
} from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      id: 1,
      number: "01",
      title: "MEDSTOCK - Medical Inventory Management",
      description: "A full-stack Medical Inventory Management System with secure role-based access control for hospitals and clinics.",
      technologies: ["React.js", "Node.js", "MySQL", "JavaScript", "Bootstrap", "Express.js"],
      github: "#",
      demo: "#",
      icon: <FaServer />,
      color: "var(--blue)",
      features: ["Role-based Access", "Real-time Tracking", "Secure Authentication", "Inventory Analytics"]
    },
    {
      id: 2,
      number: "02",
      title: "Deep Fake Detection",
      description: "AI-powered DeepFake Detection model using ResNet-18 with transfer learning for real/fake face classification.",
      technologies: ["Python", "PyTorch", "OpenCV", "MySQL", "NumPy", "TensorFlow"],
      github: "#",
      demo: "#",
      icon: <FaRobot />,
      color: "var(--green)",
      features: ["CNN Architecture", "Transfer Learning", "Real-time Detection", "High Accuracy"]
    },
    {
      id: 3,
      number: "03",
      title: "Car Rental System",
      description: "Comprehensive Car Rental System in Java using OOP concepts for vehicle management, bookings, and invoices.",
      technologies: ["Java", "OOP", "Data Structures", "Swing", "JDBC", "MySQL"],
      github: "#",
      demo: "#",
      icon: <FaCar />,
      color: "var(--orange)",
      features: ["OOP Design", "Automated Invoicing", "Booking Management", "Vehicle Tracking"]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="projects" className="section projects-section" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">05.</span>
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
              whileHover="hover"
            >
              <motion.div 
                className="project-card"
                style={{ '--project-color': project.color }}
                variants={{
                  hover: { 
                    y: -20,
                    boxShadow: `0 30px 60px rgba(${project.id === 1 ? '0, 162, 255' : project.id === 2 ? '0, 255, 136' : '255, 136, 0'}, 0.3)`
                  }
                }}
              >
                <div className="project-header">
                  <div className="project-number">{project.number}</div>
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
                      <motion.span 
                        key={idx}
                        className="feature-tag"
                        style={{ background: `${project.color}15`, color: project.color }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {feature}
                      </motion.span>
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
                      <motion.span 
                        key={idx}
                        className="tech-tag"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 + 0.3 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  <motion.a 
                    href={project.github}
                    className="project-link github"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub />
                    <span>View Code</span>
                  </motion.a>
                  <motion.a 
                    href={project.demo}
                    className="project-link demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ background: project.color }}
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </motion.a>
                </div>

                <motion.div 
                  className="project-card-corner"
                  style={{ borderColor: project.color }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;