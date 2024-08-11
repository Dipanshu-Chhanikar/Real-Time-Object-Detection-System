import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Features from './components/Features';
import Contact from './components/Contact';
import ObjectDetection from './components/ObjectDetection';
import './App.css';
import usePageTracking from './usePageTracking';

function App() {
  return (
    <Router>
      <usePageTracking /> {/* Move this inside Router */}
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/object-detection" element={<ObjectDetection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
