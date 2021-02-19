import React from 'react';
import Button from '../Common/Button';

const HowIsItWork: React.FC = () => {
  return (
    <div className='card'>
      <div className='card-header'>
        КАК ЭТО РАБОТАЕТ
        <Button onClick={() => console.log('kek')} className='btn-primary'>
          Узнать больше
        </Button>
      </div>
      <div className='card-body'>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>Удобный заказ на сайте</li>
          <li className='list-group-item'>Нет необходимости ехать в офис</li>
          <li className='list-group-item'>Огромный выбор направлений</li>
        </ul>
      </div>
    </div>
  );
};

export default HowIsItWork;
