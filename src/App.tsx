import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import HowIsItWork from './components/HowIsItWork/HowIsItWork';
import ControlledCarousel from './components/Reviews/Reviews';
import Contacts from './components/Contacts/Contacts';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <About />
      <HowIsItWork />
      <ControlledCarousel />
      <Contacts />
    </Router>
  );
};

export default App;
