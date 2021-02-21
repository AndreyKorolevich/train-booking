import React from 'react';
import cn from 'classnames';
import styles from './Context.module.scss';
import SearchTickets from './SearchTickets/SearchingTickets';

const Context: React.FC = () => (
  <div className={cn('container', styles.context)}>
    <div className='row'>
      <div className='col'>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Вся жизнь - <span className={styles.titleTravel}>путешестивие!</span>
          </h1>
          <SearchTickets />
        </div>
      </div>
    </div>
  </div>
);

export default Context;
