import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';
import Tabs from './tabs/Tabs';

function App() {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const updateTimeAndDate = () => {
      const now = new Date();
      const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const date = now.toLocaleDateString([],{day: 'numeric', month: 'long', year: 'numeric' });
      setCurrentTime(time);
      setCurrentDate(date);
    };

    // Update time and date initially
    updateTimeAndDate();

    // Update time and date every second
    const intervalId = setInterval(updateTimeAndDate, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="app-wrapper">
      <div className="top-section">
        <h1>{currentTime}</h1>
        <h2>{currentDate}</h2>
      </div>

      <div className="content-section"></div>
      <Outlet />

      <div className="bottom-section">
     
        <Tabs />
      </div>
    </div>
  );
}

export default App;
