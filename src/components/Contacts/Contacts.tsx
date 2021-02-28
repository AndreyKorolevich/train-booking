import React from 'react';
import cn from 'classnames';
import styles from './Contacts.module.scss';
import close from '../../img/closeFoter.svg';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ContactUs from './ContactUs/ContactUs';
import Subscription from './Subscription/Subscription';
import Address from './Address/Address';

const Contacts: React.FC = () => {
  return (
    <Accordion defaultActiveKey='0'>
      <div className={cn('card text-center', styles.footer)}>
        <div className='container'>
          <Accordion.Collapse eventKey='0'>
            <div className={cn('card-body', styles.body)}>
              <ContactUs />
              <div>
                <Subscription />
                <Address />
              </div>
            </div>
          </Accordion.Collapse>
        </div>
        <Accordion.Toggle className={styles.clickme} as={Card.Header} eventKey='0'>
          <div className={cn('container', styles.grop)}>
            <h5 className={styles.logo}>Лого</h5>
            <img className={styles.close} src={close} alt='иконка закрытия' />
            <cite className={styles.web}>2021 WEB</cite>
          </div>
        </Accordion.Toggle>
      </div>
    </Accordion>
  );
};

export default Contacts;
