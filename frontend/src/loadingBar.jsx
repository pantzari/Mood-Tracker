import React, { useState, useEffect } from 'react';
import './App.css'; // Import CSS styles

function LoadingBar({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0); // State to track progress

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval); // Stop the interval when progress reaches 100
          onLoadingComplete();
          return 100;
        }
        return prev + 1; // Increase progress
      });
    }, 50); // Update every 50ms

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [onLoadingComplete]); // Empty array to run only once when the component mounts

  return (
    <div className="loading">
      <div id="loadingContainer">
        <div
          id="loadingBar"
          style={{ width: `${progress}%` }} // Dynamically update the width based on progress
        ></div>
      </div>
    </div>
  );
}

export default LoadingBar;
