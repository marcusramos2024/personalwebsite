import React from 'react';
import './Main.css';
import Dock from '../Dock/Dock';
import Navbar from '../Navbar/Navbar';

const Main = () => {
  return (
    <div className="background-container">
      <Navbar/>
      <Dock /> 
    </div>
    
  );
};

export default Main;