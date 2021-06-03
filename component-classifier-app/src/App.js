import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Introduction from './pages/Introduction';
import DataPrep from './pages/DataPrep';
import PyCode from './pages/PyCode';
import Predictions from './pages/Predictions';
function App() {

  return (
    <>
      <Router>
       <div> 
        <Navbar />
      </div>
        <Switch>
        <div className = 'container' style={{marginTop : '120px'}}>
          <Route path='/' exact component={Introduction} />
          <Route path='/preparation' component={DataPrep} />
          <Route path='/pycode' component={PyCode} />
          <Route path= '/predictions' component={Predictions} />
        </div>
        </Switch>
        
      </Router>
      
    </>
  );
}

export default App;