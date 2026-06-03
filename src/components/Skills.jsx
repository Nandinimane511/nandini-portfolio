import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "C", level: 85 },
        { name: "C++", level: 80 },
        { name: "Java", level: 88 },
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 }
      ],
      gradient: "linear-gradient(135deg, #3B82F6, #6366F1)",
      icon: "💻"
    },
    {
      category: "Web Development",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "React.js", level: 88 },
        { name: "Node.js", level: 82 },
        { name: "Express.js", level: 80 }
      ],
      gradient: "linear-gradient(135deg, #10B981, #06B6D4)",
      icon: "🌐"
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 78 },
        { name: "PostgreSQL", level: 75 }
      ],
      gradient: "linear-gradient(135deg, #F59E0B, #EF4444)",
      icon: "🗄️"
    },
    {
      category: "AI/ML & Tools",
      skills: [
        { name: "PyTorch", level: 80 },
        { name: "TensorFlow", level: 75 },
        { name: "NumPy", level: 85 },
        { name: "Pandas", level: 82 },
        { name: "GitHub", level: 90 }
      ],
      gradient: "linear-gradient(135deg, #8B5CF6, #EC4899)",
      icon: "🤖"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <section id="skills" className="section skills-section" ref={ref} data-reveal>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">Technical Proficiency</p>
        </motion.div>

        <motion.div 
          className="skills-container"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={catIndex}
              className="skill-category-card"
              variants={categoryVariants}
              whileHover={{ y: -6 }}
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 style={{ background: category.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {category.category}
                </h3>
              </div>
              
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: skillIndex * 0.05 + catIndex * 0.1 + 0.3, type: "spring", stiffness: 200, damping: 15 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-level">
                      <motion.div 
                        className="skill-level-fill"
                        style={{ background: category.gradient }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: skillIndex * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="skills-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="summary-content">
            <h4>Continuously Learning & Growing</h4>
            <p>
              Actively expanding skillset with focus on Full-stack Development, 
              Artificial Intelligence, and Cloud Technologies. Currently exploring 
              advanced React patterns, microservices architecture, and computer vision.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;