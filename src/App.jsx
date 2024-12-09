
// Code for the timer component
import React from 'react';
import Clock from './Clock';
import Button from './Button';  
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='h1'> Kamal's CountDown before Closing</h1>
      <Clock />
      <Button />
    </div>
  );
}

export default App;