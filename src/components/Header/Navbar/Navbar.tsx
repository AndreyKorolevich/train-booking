import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { NAVBAR } from '../../../constants/navbar_constants';

const Navbar: React.FC = () => (
  <nav className={`navbar navbar-expand-sm bg-dark ${styles.navbar}`}>
    <div className={`container ${styles.container}`}>
      <div className='collapase navbar-collapse'>
        <ul className='navbar-nav mr-auto'>
          {NAVBAR.map(e => (
            <li key={e.value} className={`nav-item ${styles.item}`}>
              <NavLink className='nav-link' to={e.link}>
                {e.value}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
