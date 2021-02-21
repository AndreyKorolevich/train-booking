import React from 'react';
import { Link } from 'react-scroll';
import styles from './Navbar.module.scss';
import { NAVBAR } from '../../../constants/navbar_constants';

const Navbar: React.FC = () => (
  <nav className={`navbar navbar-expand-sm bg-dark ${styles.navbar}`}>
    <div className={`container ${styles.container}`}>
      <div className='collapase navbar-collapse'>
        <ul className='navbar-nav mr-auto'>
          {NAVBAR.map(e => (
            <li key={e.value} className={`nav-item ${styles.item}`}>
              <Link
                className='nav-link'
                to={e.link}
                activeClass='active'
                spy={true}
                smooth={true}
                duration={500}>
                {e.value}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
