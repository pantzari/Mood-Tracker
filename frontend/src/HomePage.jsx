import React from 'react';
import NeutralImage from './assets/happy.png'; // Import the happy.png image
import HappyImage from './assets/excitedpng.png'; // Import the happy.png image
import CryImage from './assets/cry.png'; // Import the happy.png image
import SadImage from './assets/sad.png'; // Import the happy.png image
import { useNavigate } from 'react-router-dom';

function Home() {
  // function that takes the mood when the button is clicked and navigates to the mood log page
  const navigate = useNavigate(); 
  const handleClick = (mood) => {
    navigate(`/MoodLog?mood=${mood}`);
  };

  return (
    <div>
      <div className="HomeTitle">
        <h1>Mood Tracker</h1>
      </div> {/*the mood buttons, with the mood pictures and when they are clicked they will navigate to the mood log page */}
      <div className="buttonContainer"> 
        {/* handleClick function is called with the mood as an argument */}
        <button onClick={() => handleClick('Neutral')}><img src={NeutralImage} alt="Neutral" /></button>
        <button onClick={() => handleClick('Happy')}><img src={HappyImage} alt="Happy" /></button>
        <button onClick={() => handleClick('Crying')}><img src={CryImage} alt="Crying" /></button>
        <button onClick={() => handleClick('Sad')}><img src={SadImage} alt="Sad" /></button>
      </div>
      <div className="QuestionHome">
        <h3>How do you feel today?</h3>
      </div>
    </div>
  );
}

export default Home;
