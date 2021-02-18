import React, { useState } from 'react';
import Button from '../../Common/Button';
import Input from '../../Common/Input';
import DateInput from '../../Common/DateInput';

const SearchTickets: React.FC = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const maxDate = 90;
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
  };

  const changeStartDate = (date: Date): void => {
    setStartDate(date);
    setEndDate(date);
  };

  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>Направление</h5>
        <p className='card-text'>
          <form onSubmit={handleSubmit}>
            <Input onChange={e => setFrom(e.target.value)} value={from} type='text' />
            <Input onChange={e => setTo(e.target.value)} value={to} type='text' />
            <DateInput label='Start' minDate={new Date()} startDate={startDate} onChange={changeStartDate} />
            <DateInput label='End' startDate={endDate} minDate={startDate} onChange={setEndDate} />
            <Button className='btn-primary' onClick={handleSubmit}>
              НАЙТИ БИЛЕТЫ
            </Button>
          </form>
        </p>
      </div>
    </div>
  );
};

export default SearchTickets;
