import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleSearch = () => {
    // В этой функции можно обработать выбранные даты и выполнить поиск билетов
    // например, можно отправить выбранные даты на сервер и получить результаты поиска
    // в зависимости от выбранных дат
    console.log("Выбраны даты:", startDate, endDate);
  };

  return (
    <div>
      <div style={{ display:'flex'}}>
        <span style={{width:'50px'}}>From: </span>
        <DatePicker selected={startDate} onChange={handleStartDateChange} />
      </div>
      <div style={{ display:'flex'}}>
        <span style={{width:'50px'}}>To: </span>
        <DatePicker selected={endDate} onChange={handleEndDateChange} />
      </div>
      <button style={{marginTop:'15px'}} onClick={handleSearch}>Hesabla</button>
    </div>
  );
};

export default DateRangePicker;
