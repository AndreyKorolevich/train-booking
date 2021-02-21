import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Element, Link } from 'react-scroll';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import HowIsItWork from './components/HowIsItWork/HowIsItWork';
import Reviews from './components/Reviews/Reviews';
import Contacts from './components/Contacts/Contacts';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Element name='about'>
        <About />
      </Element>
      <Element name='explanation'>
        <HowIsItWork />
      </Element>
      <Element name='reviews'>
        <Reviews />
      </Element>
      <Element name='contacts'>
        <Contacts />
      </Element>
    </Router>
  );
};

export default App;
