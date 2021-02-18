import React from 'react';
import SearchTickets from './SearchingTickets';

const Context: React.FC = () => (
  <div className='container'>
    <div className='row'>
      <div className='col'>
        <div className='header-context'>
          <h1 className='header-context__title'>
            Вся жизнь - <span>путешестивие</span>
          </h1>
          <SearchTickets />
        </div>
      </div>
    </div>
  </div>
);

export default Context;
