import React from 'react';
import { motion } from 'framer-motion';
import { HiMail } from 'react-icons/hi';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div 
          className="contact-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">04.</span>
          <h2 className="contact-title">Get In Touch</h2>
          
          <motion.p 
            className="contact-description"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Although I'm not currently looking for any new opportunities, 
            my inbox is always open. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </motion.p>
          
          <motion.a 
            href="mailto:nandinimane230@gmail.com"
            className="email-button"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiMail /> Say Hello
          </motion.a>
          
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p style={{ marginTop: '3rem', color: 'var(--slate)', fontSize: '0.9rem' }}>
              +91-9021461293 • nandinimane230@gmail.com • Mumbai, India
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;