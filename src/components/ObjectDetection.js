import React, { useEffect, useRef, useState } from 'react';
import './ObjectDetection.css';

const ObjectDetection = () => {
  const videoRef = useRef(null);
  const [selectedMode, setSelectedMode] = useState('');

  useEffect(() => {
    const getCameraStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing the camera:', error);
      }
    };

    getCameraStream();
  }, []);

  const handleModeChange = (mode) => {
    setSelectedMode(mode);
  };

  return (
    <div className="object-detection">
      <h1 className="object-detection-title">Real-Time Object Detection</h1>
      <div className="mode-buttons">
        <button onClick={() => handleModeChange('Vehicle Detection')}>Vehicle Detection</button>
        <button onClick={() => handleModeChange('Object Detection')}>Object Detection</button>
        <button onClick={() => handleModeChange('Assistive Technology')}>Assistive Technology</button>
      </div>
      <div className="camera-container">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="camera-feed"
        ></video>
        <div className="overlay">
          <p>{selectedMode ? `Mode: ${selectedMode}` : 'Select a mode to start'}</p>
        </div>
      </div>
    </div>
  );
};

export default ObjectDetection;
