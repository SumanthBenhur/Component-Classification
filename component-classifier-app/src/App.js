import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Introduction from './pages/Introduction';
import DataPrep from './pages/DataPrep';
import PyCode from './pages/PyCode';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Introduction} />
          <Route path='/preparation' component={DataPrep} />
          <Route path='/pycode' component={PyCode} />
        </Switch>
      </Router>
    </>
  );
}

export default App;