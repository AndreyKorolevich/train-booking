import React, { useState } from 'react';
import cn from 'classnames';
import styles from './Subscription.module.scss';
import Input from '../../Common/Input';
import Button from '../../Common/Button/Button';

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
      <h3 className={styles.title}>Подписка</h3>
      <h4 className={styles.underTitle}>Будьте в курсе событий</h4>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input className={styles.input} onChange={onChange} value={email} type='email' placeholder='e-mail' />
        <Button className={cn('btn-outline-light', styles.button)} onClick={handleSubmit}>ОТПРАВИТЬ</Button>
      </form>
    </>
  );
};

export default Subscription;
