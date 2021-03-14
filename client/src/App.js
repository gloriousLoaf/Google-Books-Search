import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GoogleSearch from './pages/GoogleSearch';
import Library from './pages/Library';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={GoogleSearch} />
          <Route exact path='/saved' component={Library} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
