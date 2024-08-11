import React, { useEffect, useRef, useState } from 'react';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import * as tf from '@tensorflow/tfjs';
import './ObjectDetection.css';

const ObjectDetection = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [model, setModel] = useState(null);
  const [selectedMode, setSelectedMode] = useState('');

  useEffect(() => {
    const loadModel = async () => {
      const loadedModel = await cocoSsd.load();
      setModel(loadedModel);
    };

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

    loadModel();
    getCameraStream();
  }, []);

  useEffect(() => {
    if (model) {
      const detectObjects = async () => {
        if (videoRef.current && model) {
          const predictions = await model.detect(videoRef.current);
          drawPredictions(predictions);
        }
      };

      const drawPredictions = (predictions) => {
        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        predictions.forEach((prediction) => {
          ctx.beginPath();
          ctx.rect(...prediction.bbox);
          ctx.lineWidth = 2;
          ctx.strokeStyle = 'green';
          ctx.fillStyle = 'green';
          ctx.stroke();
          ctx.fillText(
            `${prediction.class} (${Math.round(prediction.score * 100)}%)`,
            prediction.bbox[0],
            prediction.bbox[1] > 10 ? prediction.bbox[1] - 5 : 10
          );
        });
      };

      const intervalId = setInterval(detectObjects, 100);

      return () => clearInterval(intervalId);
    }
  }, [model]);

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
        <video ref={videoRef} autoPlay playsInline className="camera-feed"></video>
        <canvas ref={canvasRef} className="overlay"></canvas>
        <div className="overlay">
          <p>{selectedMode ? `Mode: ${selectedMode}` : 'Select a mode to start'}</p>
        </div>
      </div>
    </div>
  );
};

export default ObjectDetection;
