import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <div className="features">
      <div className="features-container">
        <h1 className="features-title">Our Cutting-Edge Features</h1>
        <div className="features-grid">
          <div className="feature-item">
            <h2>Real-Time Detection</h2>
            <p>Utilize advanced algorithms to detect and identify objects in real-time with high accuracy. Ideal for security and surveillance applications.</p>
          </div>
          <div className="feature-item">
            <h2>Blind Assistance</h2>
            <p>Provide auditory feedback to assist visually impaired individuals. Our system can describe the surroundings and alert users about potential hazards.</p>
          </div>
          <div className="feature-item">
            <h2>Vehicle Monitoring</h2>
            <p>Monitor vehicles at toll booths to ensure smooth traffic flow. Detect overspeeding and provide real-time alerts for efficient toll collection.</p>
          </div>
          <div className="feature-item">
            <h2>Custom Object Detection</h2>
            <p>Detect a wide range of objects tailored to specific needs. Whether it’s office supplies or specialized equipment, our system can be customized for various applications.</p>
          </div>
          <div className="feature-item">
            <h2>Analytics Dashboard</h2>
            <p>Visualize detection data with interactive charts and graphs. Analyze trends and gain insights into object detection performance and usage statistics.</p>
          </div>
          <div className="feature-item">
            <h2>Multi-Device Support</h2>
            <p>Access the system from various devices, including desktops, tablets, and smartphones. Ensure seamless integration and accessibility across all platforms.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
