import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/HomeView/Home'
import LandingPage from './Components/LandingPage';
import Create from './Components/CreateDoggy/Create';
import CardDetail from './Components/CardDetail';
import './scss/app.scss';

function App() {

  return (
    <BrowserRouter>
      <Route exact path='/' component={LandingPage} />
      <Route path='/home' component={Home} />
      <Route path='/create' component={Create} />
      <Route path='/detail/:id' component={CardDetail} />
    </BrowserRouter>
  );
}

export default App;
