import React from 'react';
import cn from 'classnames';
import styles from './About.module.scss';

const About: React.FC = () => {
  return (
    <div className='container'>
      <div className={cn('card', styles.about)}>
        <h5 className={cn('card-title', styles.title)}>О НАС</h5>
        <div className={cn('card-body', styles.body)}>
          <p>
            Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем все
            больше людей заказывают жд билеты через интернет.
          </p>
          <p>
            Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать? Мы
            расскажем о преимуществах заказа через интернет.
          </p>
          <p>
            <span className={styles.warn}>
              Покупать жд билеты дешево можно за 90 суток до отправления поезда. Благодаря динамическому
              ценообразованию цена на билеты в это время самая низкая.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
