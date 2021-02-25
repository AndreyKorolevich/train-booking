import React, { useState } from 'react';
import Input from '../Common/Input';
import Button from '../Common/Button/Button';

const Subscription: React.FC = () => {
  const [email, setEmail] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
  };
  return (
    <>
      <h3>Подписка</h3>
      <h4>Будьте в курсе событий</h4>
      <form onSubmit={handleSubmit}>
        <Input onChange={onChange} value={email} type='email' />
        <Button onClick={handleSubmit}>ОТПРАВИТЬ</Button>
      </form>
    </>
  );
};

export default Subscription;
