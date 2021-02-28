import React from 'react';
import cn from 'classnames';
import styles from './Address.module.scss';

const Address: React.FC = () => {
  return (
    <>
      <h3 className={styles.title}>Подписывайтесь на нас</h3>
      <address className={styles.articles}>
        <ul className={styles.socials}>
          <li className={styles.item}>
            <a href='#0' className={cn(styles.youtube, styles.link)}>
              <span className={styles.text}>youtube</span>
            </a>
          </li>
          <li className='socials-item'>
            <a href='#0' className={cn(styles.linkedin, styles.link)}>
              <span className={styles.text}>linkedin</span>
            </a>
          </li>
          <li className='socials-item'>
            <a href='#0' className={cn(styles.google, styles.link)}>
              <span className={styles.text}>google</span>
            </a>
          </li>
          <li className='socials-item'>
            <a href='#0' className={cn(styles.facebook, styles.link)}>
              <span className={styles.text}>facebook</span>
            </a>
          </li>
          <li className='socials-item'>
            <a href='#0' className={cn(styles.twitter, styles.link)}>
              <span className={styles.text}>twitter</span>
            </a>
          </li>
        </ul>
      </address>
    </>
  );
};

export default Address;
