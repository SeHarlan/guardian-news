import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import './css/App.css';

import Content from './pages/Content';
import Article from './pages/Article';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {

  return (<div className="App">
    <Router>
      <Header />
      <Route exact path='/:urlSearch?' component={Content} />
      <Route path='/article/:id' component={Article} />
      <Footer />
    </Router>
  </div>);
}

export default App;
