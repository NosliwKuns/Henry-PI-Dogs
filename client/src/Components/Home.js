import React from 'react';
import Cards from './Cards'
import '../scss/Home.scss';

const Home = () => {
  return (
    <div className='home'>
      Soy el componente Home
      <Cards />
    </div>
  )
};

export default Home;