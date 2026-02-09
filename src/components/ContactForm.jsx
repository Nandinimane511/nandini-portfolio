
// src/components/ContactForm.jsx - UPDATED WITH YOUR EMAILJS CREDENTIALS
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaPaperPlane, 
  FaUser, 
  FaEnvelope, 
  FaComment, 
  FaCheck, 
  FaTimes,
  FaSpinner,
  FaRobot,
  FaInfoCircle
} from 'react-icons/fa';
import { HiMail, HiCheckCircle } from 'react-icons/hi';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [charCount, setCharCount] = useState(0);

  // YOUR EMAILJS CREDENTIALS (Already filled in)
  const EMAILJS_CONFIG = {
    serviceId: 'service_qzvxl2j',
    templateId: 'template_rek7hr6',
    publicKey: 'ntBYttwV8chIYwqV6'
  };

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }, []);

  useEffect(() => {
    setCharCount(formData.message.length);
  }, [formData.message]);

  useEffect(() => {
    if (submitStatus === 'success') {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    } else if (formData.name.length > 50) {
      newErrors.name = 'Name must be less than 50 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (formData.subject.length > 100) {
      newErrors.subject = 'Subject must be less than 100 characters';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (formData.message.length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      const firstError = Object.keys(errors)[0];
      if (firstError) {
        document.querySelector(`[name="${firstError}"]`)?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: 'nandinimane230@gmail.com',
        subject: formData.subject || `New Message from ${formData.name}`,
        message: formData.message,
        reply_to: formData.email
      };

      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams
      );
      
      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setCharCount(0);
      } else {
        throw new Error(`EmailJS returned status: ${result.status}`);
      }
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('direct_email');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setCharCount(0);
    setSubmitStatus(null);
  };

  const handleDirectEmail = () => {
    const subject = encodeURIComponent(formData.subject || `Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:nandinimane230@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <motion.div 
      className="contact-form-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="form-header">
        <div className="form-icon">
          <FaRobot />
        </div>
        <h3 className="form-title">Send Me a Message</h3>
        <p className="form-subtitle">
          Your message will be sent directly to: <strong>nandinimane230@gmail.com</strong>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              <FaUser /> Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className={`form-input ${errors.name ? 'error' : ''}`}
              disabled={isSubmitting}
              maxLength={50}
            />
            <div className="input-footer">
              {errors.name ? (
                <span className="error-message">
                  <FaTimes /> {errors.name}
                </span>
              ) : (
                <span className="char-count">
                  {formData.name.length}/50 characters
                </span>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              <FaEnvelope /> Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${errors.email ? 'error' : ''}`}
              disabled={isSubmitting}
            />
            {errors.email && (
              <div className="input-footer">
                <span className="error-message">
                  <FaTimes /> {errors.email}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="subject" className="form-label">
            <FaRobot /> Subject (Optional)
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="What's this about?"
            value={formData.subject}
            onChange={handleChange}
            className={`form-input ${errors.subject ? 'error' : ''}`}
            disabled={isSubmitting}
            maxLength={100}
          />
          <div className="input-footer">
            {errors.subject ? (
              <span className="error-message">
                <FaTimes /> {errors.subject}
              </span>
            ) : (
              <span className="char-count">
                {formData.subject.length}/100 characters
              </span>
            )}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            <FaComment /> Your Message *
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Hello! I'm reaching out because..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className={`form-textarea ${errors.message ? 'error' : ''}`}
            disabled={isSubmitting}
            maxLength={1000}
          />
          <div className="textarea-footer">
            <div className="char-counter">
              <span className={`char-count ${charCount > 900 ? 'warning' : ''}`}>
                {charCount}/1000 characters
              </span>
              {charCount > 900 && (
                <span className="char-warning">
                  <FaInfoCircle /> Getting long
                </span>
              )}
            </div>
            {errors.message && (
              <span className="error-message">
                <FaTimes /> {errors.message}
              </span>
            )}
          </div>
        </div>

        <AnimatePresence>
          {submitStatus && (
            <motion.div 
              className="form-status"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {submitStatus === 'success' && (
                <div className="success-message">
                  <div className="success-header">
                    <HiCheckCircle />
                    <h4>✅ Message Sent Successfully!</h4>
                  </div>
                  <p>
                    <strong>Your message has been delivered to:</strong>
                    <br />
                    <span style={{ color: '#64ffda', fontWeight: 'bold' }}>
                      nandinimane230@gmail.com
                    </span>
                  </p>
                  <div className="success-actions">
                    <button 
                      type="button" 
                      className="send-another-btn"
                      onClick={handleReset}
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              )}
              
              {submitStatus === 'direct_email' && (
                <div className="success-message">
                  <div className="success-header">
                    <HiMail />
                    <h4>📧 Opening Email Client...</h4>
                  </div>
                  <p>
                    Your email client will open with the message pre-filled.
                  </p>
                  <div className="error-actions">
                    <button 
                      type="button" 
                      className="direct-email-link"
                      onClick={handleDirectEmail}
                    >
                      <HiMail /> Click here if email doesn't open
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="form-actions">
          <button
            type="button"
            className="reset-btn"
            onClick={handleReset}
            disabled={isSubmitting}
            title="Clear all fields"
          >
            Clear All
          </button>
          
          <motion.button
            type="submit"
            className="submit-btn"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ opacity: isSubmitting ? 0.7 : 1 }}
          >
            {isSubmitting ? (
              <>
                <FaSpinner className="spinning" />
                Sending...
              </>
            ) : (
              <>
                <FaPaperPlane />
                Send Message
              </>
            )}
          </motion.button>
        </div>

        <div className="form-footer">
          <div className="form-assurance">
            <FaCheck className="check-icon" />
            <span>Messages sent via <strong>EmailJS</strong></span>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
