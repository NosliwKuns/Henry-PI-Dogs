import React from 'react';
import Cards from './Cards'
import '../scss/Home.scss';

const Home = () => {
  let circles = 140
  let background = [];
  let i = 1;
  while (i < circles) {
    background.push(
      (
        <div className='snow'></div>
      )
    )
    i++;
  }
  return (
    <div className='home'>
      Soy el componente Home
      <Cards />
      <>
        {background}
      </>
    </div>
  )
};

export default Home;