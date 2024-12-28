import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaWifi, FaBatteryFull, FaApple } from 'react-icons/fa';

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const dayName = days[date.getDay()];
    const month = months[date.getMonth()];
    const day = date.getDate();

    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    const minutesStr = minutes < 10 ? `0${minutes}` : minutes;

    return `${dayName} ${month} ${day} ${hours}:${minutesStr} ${ampm}`;
  };

  return (
    <div className="navbar-container">
      <div className="navbar-left">
      <FaApple className="apple-logo" />
      <span className="navbar-left-text">Marcus Ramos</span>
      </div>
      <div className="navbar-right">
        <FaBatteryFull className="navbar-icon" />
        <FaWifi className="navbar-icon" />
        <p className="navbar-text">{formatTime(currentTime)}</p>
      </div>
    </div>
  );
};

export default Navbar;
