import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import HomePage from './HomePage';
import MoodLog from './MoodLog'; // Import the MoodLog component
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( //setting up routes
  <Router>
    <Routes>  {/* definning the routes of all the pages of the application */}
      <Route path="/" element={<App />} /> 
      <Route path="/home" element={<HomePage />} />
      <Route path="/MoodLog" element={<MoodLog />} /> {/* Add the MoodLog route */}
    </Routes>
  </Router>
);

