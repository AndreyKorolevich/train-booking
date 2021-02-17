import React, { useState } from 'react';
import Button from '../../Common/Button';
import Input from '../../Common/Input';

const SearchTickets: React.FC = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
  };
  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>Направление</h5>
        <p className='card-text'>
          <form onSubmit={handleSubmit}>
            <Input onChange={e => setFrom(e.target.value)} value={from} type='text' />
            <Input onChange={e => setTo(e.target.value)} value={to} type='text' />
            <Button className='btn-primary' onClick={handleSubmit}>
              Go somewhere
            </Button>
          </form>
        </p>
      </div>
    </div>
  );
};

export default SearchTickets;
