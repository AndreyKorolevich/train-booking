import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
    </Router>
  );
};

export default App;
