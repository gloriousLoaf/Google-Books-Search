import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import GoogleBooks from './pages/GoogleBooks';
// import logo from './logo.svg';
import './App.css';


const App = () => {
  return (
    <div className="App" >
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" component={GoogleBooks} />
          <Route exact path="/saved" component={GoogleBooks} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;