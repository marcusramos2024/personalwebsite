import React, { useState, useEffect } from 'react';
import './Dock.css';

const Dock = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`container ${show ? 'show' : ''}`}>
      <img className='third-places' src='/assets/3rd-Places.png'></img>
    </div>
  );
};

export default Dock;
