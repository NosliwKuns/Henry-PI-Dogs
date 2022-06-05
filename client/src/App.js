import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
/* import NavBar from './Components/NavBar' */
import Home from './Components/Home'
import LandingPage from './Components/LandingPage'
import './scss/app.scss';

function App() {

  return (
    <BrowserRouter>
      <Route exact path='/' component={LandingPage} />
      <Route path='/home' component={Home} />
    </BrowserRouter>
  );
}

export default App;
