import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import './css/App.css';

import Content from './pages/Content';
import Article from './pages/Article';
import Header from './components/Header/Header';

function App() {

  return (<div className="App">
    <Router>
      <Header />
      <Route exact path='/:urlSearch?' component={Content} />
      <Route path='/article/:id' component={Article} />
    </Router>
  </div>);
}

export default App;
