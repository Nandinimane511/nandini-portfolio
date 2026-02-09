// backend/server.js
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'https://nandinimane511.github.io'],
  credentials: true
}));
app.use(express.json());

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'Contact form API is running',
    timestamp: new Date().toISOString()
  });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide a valid email address' 
      });
    }

    const transporter = createTransporter();
    
    // Email to you (Nandini)
    const mailToYou = {
      from: process.env.EMAIL_USER,
      to: 'nandinimane230@gmail.com',
      subject: `New Contact from Portfolio: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #0a192f;">New Contact Message</h2>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #666; font-size: 14px;">This message was sent from your portfolio website.</p>
        </div>
      `
    };

    // Optional: Auto-reply to the sender
    const mailToSender = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Nandini Mane',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0a192f;">Thank you for reaching out!</h2>
          <p>Hi ${name},</p>
          <p>Thank you for contacting me through my portfolio website. I have received your message and will get back to you as soon as possible.</p>
          <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #00a2ff;">
            <p><strong>Your Message:</strong></p>
            <p style="color: #555; font-style: italic;">"${message.substring(0, 200)}${message.length > 200 ? '...' : ''}"</p>
          </div>
          <p>Best regards,<br><strong>Nandini Mane</strong></p>
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            Computer Engineering Student<br>
            Email: nandinimane230@gmail.com<br>
            Portfolio: https://nandinimane511.github.io/nandini-portfolio
          </p>
        </div>
      `
    };

    // Send both emails
    await transporter.sendMail(mailToYou);
    await transporter.sendMail(mailToSender);

    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully. Thank you for contacting me!' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later or email me directly at nandinimane230@gmail.com',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🌐 Health check: http://localhost:${PORT}/api/health`);
});