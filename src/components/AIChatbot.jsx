// src/components/AIChatbot.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaRobot, 
  FaTimes, 
  FaPaperPlane, 
  FaUser, 
  FaSpinner,
  FaRegSmile,
  FaRegLightbulb,
  FaCode,
  FaBriefcase,
  FaGraduationCap
} from 'react-icons/fa';
import { HiOutlineChatAlt2, HiOutlineQuestionMarkCircle } from 'react-icons/hi';

const AIChatbot = ({ showChatbot, setShowChatbot }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState(true);
  const messagesEndRef = useRef(null);

  const initialMessage = {
    id: 1,
    text: "Hi! I'm Nandini's AI assistant. I can help you learn more about her skills, projects, or answer questions about her experience. How can I help you today? 😊",
    sender: 'bot',
    timestamp: new Date()
  };

  useEffect(() => {
    if (showChatbot && messages.length === 0) {
      setMessages([initialMessage]);
    }
  }, [showChatbot]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickQuestions = [
    { 
      icon: <FaBriefcase />, 
      text: "Tell me about Nandini's experience",
      color: '#64ffda'
    },
    { 
      icon: <FaCode />, 
      text: "What projects has she worked on?",
      color: '#7bff8d'
    },
    { 
      icon: <FaGraduationCap />, 
      text: "What's her educational background?",
      color: '#ff9e64'
    },
    { 
      icon: <FaRegLightbulb />, 
      text: "What are her technical skills?",
      color: '#b388ff'
    },
  ];

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! 👋 I'm here to help you learn more about Nandini. What would you like to know?";
    }
    
    if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('job')) {
      return "Nandini has experience as an AI Intern at My Job Grow (2024-2025) where she worked on AI/ML models and web integration. She also served as Marketing Team Member at RGIT CESS, managing sponsorships and events.";
    }
    
    if (lowerMessage.includes('project') || lowerMessage.includes('build') || lowerMessage.includes('work')) {
      return "She has built several projects including: 1) MEDSTOCK - Medical Inventory Management System (React, Node.js, MySQL), 2) Deep Fake Detection AI model (Python, PyTorch), and 3) Car Rental System (Java, OOP).";
    }
    
    if (lowerMessage.includes('skill') || lowerMessage.includes('tech') || lowerMessage.includes('language')) {
      return "Nandini's skills include: Programming (C, C++, Java, Python, JavaScript), Web Dev (React, Node.js), Databases (MySQL, MongoDB), AI/ML (PyTorch, TensorFlow), and Tools (GitHub, NumPy, Pandas).";
    }
    
    if (lowerMessage.includes('education') || lowerMessage.includes('study') || lowerMessage.includes('college')) {
      return "She's pursuing B.E. in Computer Engineering at Rajiv Gandhi Institute of Technology (2023-2027, CGPA: 8.25). Previously completed HSC Science stream and ICSE with excellent academic performance.";
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
      return "You can contact Nandini via email: nandinimane230@gmail.com or phone: +91-9021461293. She's based in Mumbai, India. Feel free to use the contact form above for detailed inquiries!";
    }
    
    if (lowerMessage.includes('hire') || lowerMessage.includes('job') || lowerMessage.includes('opportunity')) {
      return "Nandini is actively looking for software development opportunities! She's interested in Full-stack, AI/ML, and Cloud Computing roles. You can view her resume or contact her directly for potential collaborations.";
    }
    
    if (lowerMessage.includes('resume') || lowerMessage.includes('cv') || lowerMessage.includes('portfolio')) {
      return "You can download Nandini's resume from the homepage or contact her directly. She has a strong background in Computer Engineering with practical experience in multiple technologies.";
    }
    
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return "You're welcome! 😊 Is there anything else you'd like to know about Nandini?";
    }
    
    return "That's interesting! I'm here to help you learn about Nandini's skills, projects, and experience. Could you be more specific or ask about her technical background, education, or projects?";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    setSuggestions(false);

    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(input),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickQuestion = (question) => {
    const userMessage = {
      id: messages.length + 1,
      text: question,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    setSuggestions(false);

    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(question),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearChat = () => {
    setMessages([initialMessage]);
    setSuggestions(true);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
        className={`chatbot-toggle ${showChatbot ? 'active' : ''}`}
        onClick={() => setShowChatbot(!showChatbot)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        aria-label={showChatbot ? 'Close chat assistant' : 'Open chat assistant'}
      >
        {showChatbot ? <FaTimes /> : <FaRobot />}
        <span className="chatbot-pulse"></span>
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {showChatbot && (
          <motion.div
            className="chatbot-window"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: 'spring', damping: 25 }}
          >
            {/* Chat Header */}
            <div className="chatbot-header">
              <div className="chatbot-avatar">
                <FaRobot />
              </div>
              <div className="chatbot-info">
                <h4>Nandini's AI Assistant</h4>
                <span className="status online">Online</span>
              </div>
              <button className="close-chatbot" onClick={() => setShowChatbot(false)}>
                <FaTimes />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="chatbot-messages">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  className={`message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="message-avatar">
                    {msg.sender === 'user' ? <FaUser /> : <FaRobot />}
                  </div>
                  <div className="message-content">
                    <p>{msg.text}</p>
                    <span className="message-time">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="typing-indicator">
                  <div className="typing-dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                  <span>Assistant is typing...</span>
                </div>
              )}

              {suggestions && messages.length <= 1 && (
                <div className="quick-suggestions">
                  <p className="suggestions-title">Quick Questions:</p>
                  <div className="suggestions-grid">
                    {quickQuestions.map((q, idx) => (
                      <motion.button
                        key={idx}
                        className="suggestion-btn"
                        onClick={() => handleQuickQuestion(q.text)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ '--suggestion-color': q.color }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <span className="suggestion-icon">{q.icon}</span>
                        <span className="suggestion-text">{q.text}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="chatbot-input">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about Nandini's skills, projects, or experience..."
                rows="1"
                className="chat-input"
              />
              <div className="chat-actions">
                <button className="clear-chat" onClick={clearChat} title="Clear chat">
                  Clear
                </button>
                <motion.button
                  className="send-btn"
                  onClick={handleSend}
                  disabled={!input.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPaperPlane />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;