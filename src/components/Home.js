import React from 'react';
import './Home.css';
import vehicleDetectionImg from './vehicledetection.png';
import assistiveIconImg from './assistive-icon.jpg';
import objectsIconImg from './objects-icon.jpeg';

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to Real-Time Object Detection</h1>
          <p>Revolutionizing the way we see and interact with the world through advanced object detection technology.</p>
          <a href="/object-detection" className="cta-button">Explore Now</a>
        </div>
      </header>

      <section className="introduction">
        <h2>About Our System</h2>
        <p>Our real-time object detection system offers a range of features to enhance security, assist visually impaired individuals, and much more. Discover how our technology can make a difference.</p>
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <img src={vehicleDetectionImg} alt="Vehicle Detection" />
            <h3>Vehicle Detection</h3>
            <p>Our Vehicle Detection system uses advanced algorithms to monitor and analyze vehicles on the road. It can accurately detect and classify various types of vehicles, including cars, trucks, and motorcycles. Additionally, it can measure the speed of moving vehicles, identify license plates, and provide valuable insights for traffic management and safety improvements.</p>
            <p>Whether it’s for smart city initiatives, parking management, or law enforcement, our solution delivers real-time data and actionable information to enhance road safety and operational efficiency.</p>
          </div>
          <div className="feature-item">
            <img src={assistiveIconImg} alt="Assistive Technology" />
            <h3>Assistive Technology</h3>
            <p>Support visually impaired individuals with our Assistive Technology. Our system uses object detection to identify and describe the surroundings, helping users navigate their environment more easily. It can detect obstacles, identify objects, and provide audio feedback to guide users safely.</p>
            <p>Designed to improve accessibility and independence, our technology is perfect for integration with assistive devices and applications that enhance the quality of life for visually impaired individuals.</p>
          </div>
          <div className="feature-item">
            <img src={objectsIconImg} alt="Object Detection" />
            <h3>Object Detection</h3>
            <p>Our Object Detection feature identifies and classifies everyday objects with high precision. From common items like bottles and pens to more complex objects, our system is designed to recognize and categorize a wide range of objects in various settings.</p>
            <p>Ideal for applications in inventory management, personal assistance, and educational tools, this feature provides detailed information and real-time analysis to enhance user interaction with their environment.</p>
          </div>
        </div>
      </section>

      <section className="benefits">
        <h2>Benefits of Using Our System</h2>
        <div className="benefit-list">
          <div className="benefit-item">
            <h3>Increased Safety</h3>
            <p>Enhance safety on roads and in public spaces by detecting and analyzing potential hazards in real-time.</p>
          </div>
          <div className="benefit-item">
            <h3>Improved Accessibility</h3>
            <p>Assist visually impaired individuals with real-time object recognition, providing greater independence and mobility.</p>
          </div>
          <div className="benefit-item">
            <h3>Operational Efficiency</h3>
            <p>Automate tasks like inventory management and security monitoring, reducing human error and increasing efficiency.</p>
          </div>
          <div className="benefit-item">
            <h3>Cost Savings</h3>
            <p>Reduce costs associated with manual monitoring and management through automated and accurate object detection.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
