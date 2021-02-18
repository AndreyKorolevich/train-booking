import React from 'react';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DateInputI extends ReactDatePickerProps {
  label?: string;
  onChange: (date: Date) => void;
}

const DateInput: React.FC<DateInputI> = ({ label, className, minDate, startDate, onChange, maxDate }) => {
  return (
    <div className='custom-date'>
      <div>
        <span className='custom-date__position'>{label}</span>
      </div>
      <DatePicker
        className={`date ${className}`}
        dateFormat='dd MMM yyyy'
        selected={startDate}
        onChange={(date: Date) => onChange(date)}
        popperClassName='custom-class'
        maxDate={maxDate}
        minDate={minDate}
      />
    </div>
  );
};

export default DateInput;
