import React from 'react';
// import {Router as Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Results from './components/Results';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Results />
    </div>
  );
}

export default App;