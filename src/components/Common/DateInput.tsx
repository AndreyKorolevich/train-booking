import React from 'react';
import DatePicker from 'react-datepicker';

interface DateInputI {
  label?: string;
  className?: string;
  minDate: Date;
  startDate: Date;
  setDate: (date: Date) => void;
  maxDate?: number;
}

const DateInput: React.FC<DateInputI> = ({ label, className, minDate, startDate, setDate, maxDate }) => {
  return (
    <div className='custom-date'>
      <div>
        <span className='custom-date__position'>{label}</span>
      </div>
      <DatePicker
        className={`date ${className}`}
        dateFormat='dd MMM yyyy'
        selected={startDate}
        onChange={(date: Date) => setDate(date)}
        popperClassName='custom-class'
        maxDate={maxDate}
        minDate={minDate}
      />
    </div>
  );
};

export default DateInput;
