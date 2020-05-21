import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { AccessAlarm } from '@material-ui/icons';
import './Timer.css';

const Timer = ({ endGame }) => {
  const [time, setTime] = useState(90000);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(moment(time).subtract(1, 's')), 1000);
      return () => clearTimeout(timer)
    } else {
      endGame();
  }});

  return (
    <div className="Timer">
      <AccessAlarm className="icon" style={ time <= 5000 ? { color: "red" } : null} />
      <h2 style={ time <= 5000 ? { color: "red" } : null}>
        {moment(time).format('m:ss')}
      </h2>
    </div>
  );
}

export default Timer;