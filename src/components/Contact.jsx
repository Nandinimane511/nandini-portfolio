// src/components/Contact.jsx
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPaperPlane,
  FaRobot,
  FaTimes
} from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import ContactForm from './ContactForm';
import AIChatbot from './AIChatbot';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [showChatbot, setShowChatbot] = useState(false);

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
      link: "https://maps.google.com/?q=Mumbai,India",
      delay: 0.3
    }
  ];

  return (
    <>
      <section id="contact" className="section contact-section" ref={ref} data-reveal>
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Let's Connect & Collaborate</p>
          </motion.div>

          <div className="contact-grid">
            {/* Left Column: Contact Info & Cards */}
            <motion.div 
              className="contact-info-column"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="contact-welcome-card">
                <div className="welcome-icon">
                  <HiMail />
                </div>
                <h3>Quick Contact</h3>
                <p className="welcome-text">
                  Feel free to reach out for collaborations or just a friendly hello. 
                  I typically respond within 24 hours.
                </p>
                
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
                {contactCards.map((card) => (
                  <motion.a
                    key={card.id}
                    href={card.link}
                    target={card.title === 'Location' ? '_blank' : undefined}
                    rel={card.title === 'Location' ? 'noopener noreferrer' : undefined}
                    className="contact-card"
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: card.delay }}
                    whileHover={{ 
                      y: -8,
                      scale: 1.03,
                      boxShadow: `0 10px 30px rgba(${card.id === 1 ? '0, 162, 255' : card.id === 2 ? '0, 255, 136' : '255, 136, 0'}, 0.2)`
                    }}
                    style={{ '--card-color': card.color }}
                  >
                    <div className="contact-card-icon" style={{ background: `${card.color}20`, color: card.color }}>
                      {card.icon}
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.value}</p>
                    <div className="contact-card-action">
                      <span>{card.title === 'Location' ? 'View on Map' : 'Click to Contact'}</span>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="contact-faq">
                <h4 className="faq-title">Frequently Asked</h4>
                <div className="faq-items">
                  <div className="faq-item">
                    <span className="faq-q">Response Time?</span>
                    <span className="faq-a">Within 24-48 hours</span>
                  </div>
                  <div className="faq-item">
                    <span className="faq-q">Best way to reach?</span>
                    <span className="faq-a">Email or LinkedIn</span>
                  </div>
                  <div className="faq-item">
                    <span className="faq-q">Open to collaborations?</span>
                    <span className="faq-a">Always! Let's build something</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div 
              className="contact-form-column"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Chatbot */}
      <AIChatbot showChatbot={showChatbot} setShowChatbot={setShowChatbot} />
    </>
  );
};

export default Contact;