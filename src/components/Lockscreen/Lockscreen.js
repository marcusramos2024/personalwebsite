import React, { useState, useEffect } from 'react';
import './Lockscreen.css';

const Lockscreen = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    const timeString = currentTime.toLocaleTimeString([], {
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true
    });
  
    return timeString.replace(/\s?[APMapm]{2,3}$/, '');
  };
  
  

  const formatDate = () => {
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    return currentTime.toLocaleDateString(undefined, options);
  };

  return (
    <div className="background-container">
      <div className="lockscreen-content">
        <h2 className="date">{formatDate()}</h2>
        <h1 className="time">{formatTime()}</h1>
      </div>
    </div>
  );
};

export default Lockscreen;
