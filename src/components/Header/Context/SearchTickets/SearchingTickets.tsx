import React, { useState } from 'react';
import cn from 'classnames';
import styles from './SearchTickets.module.scss';
import change from '../../../../img/changeDirection.svg';
import Button from '../../../Common/Button';
import Input from '../../../Common/Input';
import DateInput from '../../../Common/DateInput/DateInput';

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

  const changeDirection = (): void => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className={cn('card', styles.search)}>
      <div className='card-body'>
        <h5 className={cn('card-title', styles.title)}>Направление</h5>
        <p className='card-text'>
          <form onSubmit={handleSubmit}>
            <div className={styles.direction}>
              <Input
                className={styles.input}
                onChange={e => setFrom(e.target.value)}
                value={from}
                type='text'
                placeholder='Откуда'
              />
              <Button className={styles.change} onClick={changeDirection}>
                <img src={change} alt='Button`s icon' />
              </Button>
              <Input
                className={styles.input}
                onChange={e => setTo(e.target.value)}
                value={to}
                type='text'
                placeholder='Куда'
              />
            </div>
            <div className={styles.range}>
              <DateInput minDate={new Date()} startDate={startDate} onChange={changeStartDate} />
              <DateInput startDate={endDate} minDate={startDate} onChange={setEndDate} />
            </div>
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
