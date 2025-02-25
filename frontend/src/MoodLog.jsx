import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './MoodLog.css'; // Import the CSS file for styling

function MoodLog() {
  const [text, setText] = useState('');
  const [mood, setMood] = useState('');
  const [history, setHistory] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate(); // Use the useNavigate hook

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const moodParam = params.get('mood');
    setMood(moodParam);

    // Load history from localStorage
    const savedHistory = localStorage.getItem('moodHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, [location]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSave = () => {
    const date = new Date();
    const newEntry = {
      mood,
      text,
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString(),
    };

    // Update history with the new entry
    const updatedHistory = [...history, newEntry];
    setHistory(updatedHistory);

    // Save updated history to localStorage
    localStorage.setItem('moodHistory', JSON.stringify(updatedHistory));

    // Clear the text input after saving
    setText('');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleBackButtonClick = () => {
    navigate('/home'); // Navigate back to the HomePage
  };

  return (
    <div className="mood-log-container">
      <div className="history-dropdown">
        <button onClick={toggleDropdown} className="history-button">
          History
        </button>
        {isDropdownOpen && (
          <div className="history-content">
            <ul>
              {history.map((entry, index) => (
                <li key={index}>
                  <strong>{entry.date} {entry.time}</strong> - {entry.mood}: {entry.text}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      <h1>Hi</h1>
      <textarea
        className="mood-log-textbox"
        value={text}
        onChange={handleChange}
        placeholder="Write your mood here..."
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={handleBackButtonClick} className="back-button">Back</button>
    </div>
  );
}

export default MoodLog;