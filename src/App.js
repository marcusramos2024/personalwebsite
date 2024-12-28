import React, { useState } from 'react';
import Main from './components/Main/Main';
import Lockscreen from './components/Lockscreen/Lockscreen';
import './App.css';

function App() {
  const [showMain, setShowMain] = useState(false);

  const handleInteraction = () => {
    setShowMain(true); 
  };

  return (
    <div
      className="App"
      onClick={handleInteraction}
    >
      {showMain ? <Main /> : <Lockscreen />}
    </div>
  );
}

export default App;
