import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactCards = [
    {
      id: 1,
      icon: <FaPhone />,
      title: "Phone",
      value: "+91-9021461293",
      color: "var(--blue)",
      link: "tel:+919021461293",
      delay: 0.1
    },
    {
      id: 2,
      icon: <FaEnvelope />,
      title: "Email",
      value: "nandinimane230@gmail.com",
      color: "var(--green)",
      link: "mailto:nandinimane230@gmail.com",
      delay: 0.2
    },
    {
      id: 3,
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Mumbai, India",
      color: "var(--orange)",
      link: "#",
      delay: 0.3
    }
  ];

  const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com", color: "#333" },
    { icon: <FaLinkedin />, link: "https://linkedin.com/in/nandini-mane", color: "#0077b5" },
    { icon: <FaInstagram />, link: "https://instagram.com", color: "#e4405f" }
  ];

  return (
    <section id="contact" className="section contact-section" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">04.</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's Connect</p>
        </motion.div>

        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="contact-description-container">
            <motion.p 
              className="contact-description"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Although I'm not currently looking for any new opportunities, 
              my inbox is always open. Whether you have a question or just want to say hi, 
              I'll try my best to get back to you!
            </motion.p>
            
            <motion.a 
              href="mailto:nandinimane230@gmail.com"
              className="email-button"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 162, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <HiMail className="button-icon" />
              <span>Say Hello</span>
              <FaPaperPlane className="send-icon" />
            </motion.a>
          </div>

          <div className="contact-cards-container">
            {contactCards.map((card, index) => (
              <motion.a
                key={card.id}
                href={card.link}
                className="contact-card"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: card.delay }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  boxShadow: `0 15px 40px rgba(${card.id === 1 ? '0, 162, 255' : card.id === 2 ? '0, 255, 136' : '255, 136, 0'}, 0.2)`
                }}
                style={{ '--card-color': card.color }}
              >
                <div className="contact-card-icon" style={{ background: `${card.color}20`, color: card.color }}>
                  {card.icon}
                </div>
                <h3>{card.title}</h3>
                <p>{card.value}</p>
                <div className="contact-card-hover">
                  <span>Click to {card.title === 'Location' ? 'view' : 'contact'}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="contact-footer"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="social-links-container">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                style={{ background: `${social.color}20`, color: social.color }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          
          <div className="copyright">
            <p>© 2025 Nandini Mane. All rights reserved.</p>
            <p className="built-with">Built with React & 💤</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;