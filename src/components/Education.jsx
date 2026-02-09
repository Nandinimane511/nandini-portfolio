import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaCalendarAlt, 
  FaMapMarkerAlt,
  FaStar,
  FaBook,
  FaUniversity
} from 'react-icons/fa';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const educationData = [
    {
      id: 1,
      degree: "B.E in Computer Engineering",
      institution: "Rajiv Gandhi Institute of Technology, Mumbai University",
      duration: "2023 - 2027",
      location: "Mumbai, Maharashtra",
      grade: "CGPA: 8.25",
      description: "Focus on software development, machine learning, and cloud computing.",
      icon: <FaUniversity />,
      color: "var(--blue)",
      achievements: [
        "Active in Technical Clubs",
        "Participated in Hackathons",
        "Coursework includes AI/ML, Cloud Computing"
      ]
    },
    {
      id: 2,
      degree: "12th HSC",
      institution: "Chhatrapati Shivaji Junior College",
      duration: "2021 - 2023",
      location: "Solapur, Maharashtra",
      description: "Science Stream with Computer Science",
      icon: <FaBook />,
      color: "var(--green)",
      achievements: [
        "Science Stream",
        "Computer Science Focus",
        "Academic Excellence"
      ]
    },
    {
      id: 3,
      degree: "10th ICSE",
      institution: "Saint Thomas English Medium School",
      duration: "2009 - 2021",
      location: "Solapur, Maharashtra",
      grade: "Percentage: 86.42%",
      description: "Strong foundation in Mathematics and Science",
      icon: <FaGraduationCap />,
      color: "var(--orange)",
      achievements: [
        "Academic Topper",
        "Science Club Member",
        "Sports Participation"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
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
    <section id="education" className="section education-section" ref={ref} data-reveal>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My Academic Journey</p>
        </motion.div>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          <motion.div 
            className="timeline-items"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {educationData.map((edu, index) => (
              <motion.div 
                key={edu.id}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                variants={itemVariants}
              >
                <motion.div 
                  className="timeline-dot"
                  style={{ borderColor: edu.color }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="dot-icon" style={{ color: edu.color }}>
                    {edu.icon}
                  </div>
                  <div className="timeline-year">{edu.duration.split(' - ')[0]}</div>
                </motion.div>

                <div className="timeline-content" style={{ borderLeftColor: edu.color }}>
                  <div className="timeline-header">
                    <div className="degree-icon" style={{ color: edu.color }}>
                      {edu.icon}
                    </div>
                    <div>
                      <h3>{edu.degree}</h3>
                      <p className="institution">{edu.institution}</p>
                    </div>
                  </div>

                  <div className="timeline-details">
                    <div className="detail-item">
                      <FaCalendarAlt />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="detail-item">
                      <FaMapMarkerAlt />
                      <span>{edu.location}</span>
                    </div>
                    {edu.grade && (
                      <div className="grade-item">
                        <FaStar />
                        <span className="grade-value">{edu.grade}</span>
                      </div>
                    )}
                  </div>

                  {edu.description && (
                    <p className="timeline-description">{edu.description}</p>
                  )}

                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="achievements">
                      <h4>Highlights:</h4>
                      <ul>
                        {edu.achievements.map((achievement, idx) => (
                          <motion.li 
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <span className="achievement-bullet" style={{ background: edu.color }} />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;