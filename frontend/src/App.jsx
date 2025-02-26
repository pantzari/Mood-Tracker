import React from 'react';
import { useNavigate } from 'react-router-dom';
import VectorImage from './assets/Vector.png';
import LoadingBar from './loadingBar';
import './App.css';

function App() {
  const navigate = useNavigate();
              //localStorage.clear();   for cleaning history cache
             //sessionStorage.clear();
  const handleLoadingComplete = () => {
    navigate('/home');
  };

  return (
    <div className="App">
      <div className="moodtrackerTitle">
        <h1>Mood Tracker</h1>
        <Image /> {/* Use the Image component here */}
      </div>
      
      {/* Include the LoadingBar component */}
      <LoadingBar onLoadingComplete={handleLoadingComplete} />
    </div>
  );
}

function Image() {
  return (
    <div className="starVector">
      <img
        src={VectorImage}  // Use the imported image file
        alt="Star Vector"
        id="myImage"
      />
      <div className="starVector2">
        <img
          src={VectorImage}  // Use the imported image file
          alt="StarVector2"
          id="myImage2"
        />
      </div>
    </div>
  );
}

export default App;
