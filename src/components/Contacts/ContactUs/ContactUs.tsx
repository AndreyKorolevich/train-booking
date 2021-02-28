import React from 'react';
import cn from 'classnames';
import styles from './ContactUs.module.scss';
import phone from '../../../img/phone.svg';
import mail from '../../../img/mail.svg';
import located from '../../../img/located.svg';
import skype from '../../../img/skype.svg';

const ContactUs: React.FC = () => {
  return (
    <div className={styles.contactUs}>
      <h3 className={styles.title}>Свяжитесь с нами</h3>
      <ul>
        <li>
          <img className={styles.a} src={phone} alt='icon contacts'/>
          <a rel="noreferrer" target='_blank' href='tel:8-800-000-00-00'>8 (800) 000 00 00</a>
        </li>
        <li>
        <img src={mail} alt='icon contacts'/>
          <a rel="noreferrer" target='_blank' href='mailto: inbox@mail.ru'>inbox@mail.ru</a>
        </li>
        <li>
        <img src={skype} alt='icon contacts'/>
          <a rel="noreferrer" target='_blank' href='skype:tu.train.tickets?chat'>tu.train.tickets</a>
        </li>
        <li>
        <img src={located} alt='icon contacts'/>
          <a href='https://www.google.com/maps/search/%D0%B3.+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0+%D1%83%D0%BB.+%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+27-35+555+555/@55.254695,37.4896353,17z/data=!3m1!4b1' rel="noreferrer" target='_blank'>
            г. Москва ул. Московская 27-35 555 555
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactUs;
