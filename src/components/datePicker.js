import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    if (date > new Date()) {
      setSelectedDate(date);
    } else {
      alert('Selected date cannot be in the past');
    }
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      minDate={new Date()}
      closeOnSelect={true}
      shouldCloseOnSelect={true}
      className="w-full block px-12 md:px-6 lg:px-8 py-2 mt-2 border md:mr-2 bg-light focus:border-highlight focus:ring focus:ring-highlight focus:ring-opacity-50"
      />
  );
}

export default CustomCalendar;