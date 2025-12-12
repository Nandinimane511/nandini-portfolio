import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaBriefcase, 
  FaCalendarAlt, 
  FaBuilding, 
  FaTasks,
  FaRocket,
  FaChartLine,
  FaUsers,
  FaLightbulb
} from 'react-icons/fa';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      id: 1,
      title: "Artificial Intelligence Intern",
      company: "My Job Grow",
      duration: "07/2024 - 07/2025",
      location: "Andheri, India",
      type: "Internship",
      icon: <FaLightbulb />,
      color: "var(--blue)",
      tags: ["AI/ML", "Web Integration", "Automation"],
      responsibilities: [
        "Assisted in developing and testing AI/ML models",
        "Integrated AI models into web applications",
        "Improved automation and decision-making processes",
        "Collaborated with senior developers on complex problems"
      ],
      achievements: [
        "Increased model accuracy by 15%",
        "Reduced processing time by 30%",
        "Implemented 3+ automation workflows"
      ]
    },
    {
      id: 2,
      title: "Marketing Team Member",
      company: "RGIT CESS",
      duration: "2023 - 2024",
      location: "Mumbai, India",
      type: "Student Club",
      icon: <FaUsers />,
      color: "var(--green)",
      tags: ["Communication", "Coordination", "Event Management"],
      responsibilities: [
        "Coordinated with external companies for technical workshops and seminars",
        "Handled professional communication via email and calls for sponsorships",
        "Managed collaborations and event planning",
        "Organized campus tech events with 200+ participants"
      ],
      achievements: [
        "Secured 5+ sponsorships for events",
        "Increased event participation by 40%",
        "Built network with 10+ tech companies"
      ]
    }
  ];

  return (
    <section id="experience" className="section experience-section" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">03.</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">Professional Journey</p>
        </motion.div>

        <div className="experience-cards-container">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className="experience-card-wrapper"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div 
                className="experience-card"
                whileHover={{ 
                  y: -15,
                  boxShadow: `0 25px 50px rgba(${exp.id === 1 ? '0, 162, 255' : '0, 255, 136'}, 0.2)`
                }}
                style={{ '--card-color': exp.color }}
              >
                <div className="experience-header">
                  <div className="experience-icon-container" style={{ background: `${exp.color}20`, color: exp.color }}>
                    {exp.icon}
                    <div className="experience-type">{exp.type}</div>
                  </div>
                  <div className="experience-title-container">
                    <h3>{exp.title}</h3>
                    <div className="company-info">
                      <FaBuilding />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                </div>

                <div className="experience-details">
                  <div className="detail-item">
                    <FaCalendarAlt />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="detail-item">
                    <FaBuilding />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className="experience-tags">
                  {exp.tags.map((tag, idx) => (
                    <motion.span 
                      key={idx}
                      className="experience-tag"
                      style={{ background: `${exp.color}20`, color: exp.color }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="responsibilities-section">
                  <div className="section-title-row">
                    <FaTasks />
                    <h4>Responsibilities</h4>
                  </div>
                  <ul className="responsibilities-list">
                    {exp.responsibilities.map((resp, idx) => (
                      <motion.li 
                        key={idx}
                        className="responsibility-item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 + 0.3 }}
                      >
                        <span className="bullet" style={{ background: exp.color }} />
                        {resp}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="achievements-section">
                  <div className="section-title-row">
                    <FaRocket />
                    <h4>Key Achievements</h4>
                  </div>
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.li 
                        key={idx}
                        className="achievement-item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 + 0.5 }}
                      >
                        <span className="achievement-icon" style={{ color: exp.color }}>✓</span>
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <motion.div 
                  className="experience-card-footer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="experience-duration-line">
                    <div className="line" style={{ background: exp.color }} />
                    <span className="duration-text">{exp.duration}</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;