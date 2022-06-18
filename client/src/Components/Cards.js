import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/HomeView/Cards.scss';

const Cards = ({ currentDogs }) => {
  

  let display;

  if( currentDogs.length ) {
    display = currentDogs?.map(({ id, name, image, temperaments, min_weight, max_weight }) => {
      let dua;
      if(!min_weight && !max_weight) dua = 'Unknown';
      if(!min_weight && max_weight) dua = `${max_weight} kgs`;
      if(min_weight && !max_weight) dua = `${min_weight} kgs`;
      if(min_weight && max_weight) dua = `${min_weight} - ${max_weight} kgs`
      return (
        <Link 
          to={`/detail/${id}`} 
          key={id}
          className='over-content' 
        > 
          <svg className='huesito' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 146.34 67.9">
            <defs>
            </defs>
            <title>Recurso 2huesito</title>
            <g id="Capa_2" data-name="Capa 2">
              <g id="Layer_1" data-name="Layer 1">
                <path class="cls-1" d="M119.42,1.13a19.21,19.21,0,0,1,11.06,2.16,16.56,16.56,0,0,1,7.9,9.45,18.21,18.21,0,0,1,.53,9.68,30.57,30.57,0,0,1-2.8,7.19,2.72,2.72,0,0,0-.12,2.51c1.81,3.52,3.43,7.35,3.34,11.38A17.64,17.64,0,0,1,135,55.15c-5.15,5.62-12.9,6.65-20.07,5.08a22,22,0,0,1-8.5-3.68c-2.48-1.86-3.62-5.39-6.47-6.61a10.48,10.48,0,0,0-4.64-.71H46.37c-6.31,0-8.08,3.6-12.73,7.08-8.07,6-21.21,6.56-28.28-1.16A17.48,17.48,0,0,1,1,44.35c-.31-4,1.14-7.87,2.9-11.39a3.2,3.2,0,0,0,.38-3.19,27.12,27.12,0,0,1-3.26-9.56A17.92,17.92,0,0,1,5.66,6.52,18.16,18.16,0,0,1,20.31,1.08c4.9.47,10.74,1.56,14.39,5.11,1.26,1.22,2.22,2.72,3.4,4,2.56,2.78,6.23,2.88,9.75,2.74,4.25-.18,8.49-.18,12.75-.17l29.79.08c6,0,10.08-.54,14-5.4C107.9,2.94,113.67,1.74,119.42,1.13Z"/>
              </g>
            </g>
          </svg>
          <section className='image-content'>
            <img src={image} alt={name}/>
          </section>
            <div className='blob one'></div>
            <div className='blob two'></div>

          <section className='text'>
            <h1 className='elegantshadow'>{name}</h1>
            <div>{temperaments?.join(' , ')}</div>
            <h3>{dua}</h3>
      
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