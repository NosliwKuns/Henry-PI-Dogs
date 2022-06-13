import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/HomeView/Cards.scss';

const Cards = ({ currentDogs }) => {
  

  let display;

  if( currentDogs.length ) {
    display = currentDogs?.map(({ id, name, image, temperaments, weight }) => {
      return (
        <Link 
          to={`/detail/${id}`} 
          key={id} className='card'
        >
          <div className='blob'></div>
          <div className='blob two'></div>
          <section>
            <img src={image} alt={name}/>
          </section>
          <h1>{name}</h1>
          {/* <div>{temperaments?.join(' , ')}</div> */}
          <h3>{weight} Kilos</h3>
        </Link>
      )
    });
  } else {
    display = 'Dog breed not found';
  }
  return (
    <div className='cards-container'>
      {display}
    </div>
  )
};

export default Cards;