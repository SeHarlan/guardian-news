import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';

import Content from './pages/Content';
import Article from './pages/Article';

function App() {

  return (<>
    <Router>
      <header>
        <Link to='/'>
          <h1>The Guardian</h1>
        </Link>
      </header>
      <Route exact path='/:urlSearch?' component={Content} />
      <Route path='/article/:id' component={Article} />
    </Router>
  </>);
}

export default App;
