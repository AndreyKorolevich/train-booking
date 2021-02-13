import React from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Context from './Context/Context';

const Header: React.FC = () => (
  <header className={styles.header}>
    <div className='container'>
      <NavLink className='navbar-brand' to='/'>
        <span>Logo</span>
      </NavLink>
    </div>
    <Navbar />
    <Context />
  </header>
);

export default Header;
