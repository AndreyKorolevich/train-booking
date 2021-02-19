import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <>
      <h3>Свяжитесь с нами</h3>
      <ul>
        <li>
          <a href='tel:8-800-000-00-00'>8 (800) 000 00 00</a>
        </li>
        <li>
          <a href='mailto: inbox@mail.ru'>inbox@mail.ru</a>
        </li>
        <li>
          <a href='skype:tu.train.tickets?chat'>tu.train.tickets</a>
        </li>
        <li>
          <a href='https://www.google.com/maps/search/%D0%B3.+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0+%D1%83%D0%BB.+%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+27-35+555+555/@55.254695,37.4896353,17z/data=!3m1!4b1'>
            г. Москва ул. Московская 27-35 555 555
          </a>
        </li>
      </ul>
    </>
  );
};

export default ContactUs;
