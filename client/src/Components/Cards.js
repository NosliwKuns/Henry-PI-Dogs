import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/HomeView/Cards.scss';

const Cards = ({ dogs, dogName, search, filter }) => {
  
  let change = search ? dogName : filter.length ? filter : dogs;

  let display;
  console.log(change);

  if( Array.isArray(change) ) {
    display = change?.map(({ id, name, image, temperaments, weight }) => {
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
          <div>{temperaments?.join(' , ')}</div>
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