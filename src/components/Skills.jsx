import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["C", "C++", "Java", "Python", "JavaScript"],
      color: "var(--blue)",
      icon: "💻"
    },
    {
      category: "Web Development",
      skills: ["HTML5", "CSS3", "React.js", "Node.js", "Express.js"],
      color: "var(--green)",
      icon: "🌐"
    },
    {
      category: "Databases",
      skills: ["MySQL", "MongoDB", "PostgreSQL"],
      color: "var(--orange)",
      icon: "🗄️"
    },
    {
      category: "AI/ML & Tools",
      skills: ["PyTorch", "TensorFlow", "NumPy", "Pandas", "GitHub"],
      color: "var(--purple)",
      icon: "🤖"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    })
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
              whileHover={{ y: -5 }}
            >
              <div className="category-header">
                <div className="category-icon" style={{ color: category.color }}>
                  {category.icon}
                </div>
                <h3 style={{ color: category.color }}>{category.category}</h3>
              </div>
              
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    custom={skillIndex}
                    variants={skillVariants}
                    whileHover={{ scale: 1.05 }}
                    style={{ 
                      background: `${category.color}10`,
                      borderColor: category.color
                    }}
                  >
                    <span className="skill-name">{skill}</span>
                    <div className="skill-level" style={{ background: `${category.color}30` }}>
                      <motion.div 
                        className="skill-level-fill"
                        style={{ background: category.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${70 + Math.random() * 30}%` }}
                        transition={{ delay: skillIndex * 0.1 + 0.5, duration: 1 }}
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
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
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