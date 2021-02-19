import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ContactUs from './ContactUs';
import Subscription from './Subscription';

const Contacts: React.FC = () => {
  return (
    <Accordion defaultActiveKey='0'>
      <div className='card text-center'>
        <Accordion.Collapse eventKey='0'>
          <div className='card-body'>
            <ContactUs />
            <Subscription />
            <address className='articles-socials'>
              <ul className='socials'>
                <li className='socials-item'>
                  <a href='#0' className='socials-link socials-link-twitter'>
                    <span className='socials-link-text'>twitter</span>
                  </a>
                </li>
                <li className='socials-item'>
                  <a href='#0' className='socials-link socials-link-pinterest'>
                    <span className='socials-link-text'>pinterest</span>
                  </a>
                </li>
                <li className='socials-item'>
                  <a href='#0' className='socials-link socials-link-facebook'>
                    <span className='socials-link-text'>facebook</span>
                  </a>
                </li>
                <li className='socials-item'>
                  <a href='#0' className='socials-link socials-link-instagram'>
                    <span className='socials-link-text'>instagram</span>
                  </a>
                </li>
                <li className='socials-item'>
                  <a href='#0' className='socials-link socials-link-tumblr'>
                    <span className='socials-link-text'>tumblr</span>
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </Accordion.Collapse>
        <Accordion.Toggle as={Card.Header} eventKey='0'>
          Click me!
        </Accordion.Toggle>
      </div>
    </Accordion>
  );
};

export default Contacts;
