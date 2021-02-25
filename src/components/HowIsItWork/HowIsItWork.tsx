import React from 'react';
import cn from 'classnames';
import styles from './HowIsItWork.module.scss';
import Button from '../Common/Button/Button';
import order from '../../img/order.svg';
import office from '../../img/office.svg';
import direction from '../../img/direction.svg';

const HowIsItWork: React.FC = () => {
  return (
    <div className={styles.work}>
      <div className='container'>
        <div className={cn('card', styles.block)}>
          <div className={cn('card-header', styles.header)}>
            КАК ЭТО РАБОТАЕТ
            <Button onClick={() => console.log('kek')} className={cn('btn-outline-light', styles.button)}>
              Узнать больше
            </Button>
          </div>
          <div className={cn('card-body', styles.body)}>
            <ul className={cn('list-group list-group-horizontal', styles.list)}>
              <li className={cn('list-group-item', styles.li)}>
                <img src={order} alt='print icon' />
                Удобный заказ на сайте
              </li>
              <li className={cn('list-group-item', styles.li)}>
                <img src={office} alt='print icon' />
                Нет необходимости ехать в офис
              </li>
              <li className={cn('list-group-item', styles.li)}>
                <img src={direction} alt='print icon' />
                Огромный выбор направлений
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowIsItWork;
