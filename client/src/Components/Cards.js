import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/HomeView/Cards.scss';

const Cards = ({ currentDogs }) => {
  

  let display;

  if( currentDogs.length ) {
    display = currentDogs?.map(({ id, name, image, temperaments, min_weight, max_weight }) => {
      return (
        <Link 
          to={`/detail/${id}`} 
          key={id}
          className='over-content' 
        >
          <section className='image-content'>
            <img src={image} alt={name}/>
          </section>
            <div className='blob'></div>
            <div className='blob two'></div>

          <section className='text'>
          <h2>{name}</h2>
          <div>{temperaments?.join(' , ')}</div>
          <h3>{min_weight} - {max_weight} Kilos</h3>
          </section>

          <section className='card'>
          </section>
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