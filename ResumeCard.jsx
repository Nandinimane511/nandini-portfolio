// src/components/ResumeCard.jsx
import React from 'react';
import { Download } from 'lucide-react';

const ResumeCard = ({ onDownload }) => {
  return (
    <div className="summary-card">
      <div className="card-header">
        <h3 className="card-title">Professional Summary Card</h3>
        <button 
          className="download-btn"
          onClick={onDownload}
          aria-label="Download summary card"
        >
          <Download size={16} />
          <span>Download Card</span>
        </button>
      </div>
      
      <div className="card-grid">
        <div className="card-item">
          <span className="card-label">Name:</span>
          <span className="card-value">Nandini Mane</span>
        </div>
        <div className="card-item">
          <span className="card-label">Education:</span>
          <span className="card-value">B.E. Computer Engineering (CGPA: 8.25)</span>
        </div>
        <div className="card-item">
          <span className="card-label">Tech Stack:</span>
          <span className="card-value">Full-stack (React, Node.js, MySQL), AI/ML (PyTorch, OpenCV)</span>
        </div>
        <div className="card-item">
          <span className="card-label">Key Projects:</span>
          <span className="card-value">Car Rental System, Deep Fake Detection, Medical Inventory Management</span>
        </div>
        <div className="card-item">
          <span className="card-label">Contact:</span>
          <span className="card-value">+91-9021461293 | nandinimane230@gmail.com</span>
        </div>
        <div className="card-item">
          <span className="card-label">LinkedIn:</span>
          <span className="card-value">linkedin.com/in/nandini-mane-757020280</span>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;