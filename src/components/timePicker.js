import React, { useState } from 'react';

const TimePicker = () => {
  const [hour, setHour] = useState(new Date().getHours());
  const [minute, setMinute] = useState(Math.floor(new Date().getMinutes() / 30) * 30);

  const handleHourChange = (e) => {
    setHour(parseInt(e.target.value));
  }

  const handleMinuteChange = (e) => {
    setMinute(parseInt(e.target.value));
  }

  const options = [];
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 30) {
      const time = ("0" + h).slice(-2) + ":" + ("0" + m).slice(-2);
      options.push(<option key={time} value={h + ":" + m}>{time}</option>);
    }
  }

  return (
    <div>
      <select value={hour + ":" + minute} onChange={handleHourChange} 
        className="w-full block px-20 md:px-14 lg:px-20 py-2 mt-2 md:ml-1 border bg-light focus:border-highlight focus:ring focus:ring-highlight focus:ring-opacity-50">
        {options}
      </select>
    </div>
  );
}

export default TimePicker;
