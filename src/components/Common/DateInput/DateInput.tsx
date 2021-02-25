import React from 'react';
import { ru } from 'date-fns/esm/locale';
import './DateInput.scss';
import DatePicker, { CalendarContainer, ReactDatePickerProps, registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DateInputI extends ReactDatePickerProps {
  onChange: (date: Date) => void;
}

const DateInput: React.FC<DateInputI> = ({ minDate, startDate, onChange, maxDate }) => {
  registerLocale('ru', ru);

  return (
    <DatePicker
      className='date'
      dateFormat='dd/MM/yy'
      selected={startDate}
      onChange={(date: Date) => onChange(date)}
      popperClassName='custom'
      maxDate={maxDate}
      minDate={minDate}
      locale='ru'
      placeholderText='ДД/ММ/ГГ'
    />
  );
};

export default DateInput;
