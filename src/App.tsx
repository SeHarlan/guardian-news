import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Content from './pages/Content';
import Article from './pages/Article';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Provider from './utils/useContext';

function App() {

  return (<Provider>
    <Router>
      <Header />
      <Route exact path='/:urlSearch?' component={Content} />
      <Route path='/article/:id' component={Article} />
      <Footer />
    </Router>
  </Provider>);
}

export default App;
