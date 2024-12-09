
import React from 'react'
import Button from './button';


function getCurrentTime() {
  const time = new Date().toLocaleTimeString();
  return time;
}

function Clock() {
  const [time, setTime] = React.useState(getCurrentTime());
  const [isRunning, setIsRunning] = React.useState(true);

  React.useEffect(() => {
    if (!isRunning)  return;

    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);
 
  const toggleClock = () => {
    setIsRunning((prev) => !prev);
  };

  return (
    <>
      <h1 className="clock-time">{time}</h1>
  <br />
      <input className="clock-input" />
      <Button onClick={toggleClock} label={isRunning ? 'Stop' : 'Start'} />
    </>
  );
  
}

export default Clock;
