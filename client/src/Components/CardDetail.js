import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetail, cleanDetail } from './../Redux/actions/index';
import Loading from './Loading';
import '../scss/Details.scss';

const CardDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [transition, setTransition] = useState('transition transition-1 is-active');

  useEffect(() => {
    setTransition(transition.split(' ').slice(0, 2).join(' '))
  }, [transition])
  
  useEffect(() => {
    dispatch(cleanDetail());
    dispatch(getDetail(id));

  },[dispatch, id] )
  let { name, 
        image, 
        min_height,
        max_height, 
        min_weight, 
        max_weight, 
        temperaments,
        life_span 
  } = useSelector(state => state.detail);
  let temps;
  if(temperaments && typeof temperaments[0] === 'object') {
  temps = temperaments.map(e => e.name).join(', ');
  } else {
    temps = temperaments?.join(', ');
  }

  let display;

  if(!image) {
    display = <Loading />;
  } else {
    display = (
      <div className='detail-container'>
      <div className={transition}></div>
      <section>
        <div className='left'>
          <div className='left-content'>
            <h1>
              {name}
            </h1>
            <h3>Temperaments:</h3>
            <p>Their temperaments are {temps}.</p>
          </div>
        </div>
        <div className='center '>
          <h1>Friends</h1>
          <span className='square-up'></span>
          <span className='square-down'></span>
          <div className='img-center'>
            <img src={image} alt={name} />
          </div>
          <h1 className='text-right'>Furever</h1>
        </div>
        <div className='right'>
          <div className='right-content'>
            <h3>Life Span: </h3>
            <p>Their life span is {life_span}.</p>
            <h3>Height: </h3>
            <p>This breed can measure between {min_height ? `${min_height} ` : 'Unknown '} 
                and {max_height ? max_height : 'Unknown'} centimeters.
            </p>
            <h3>Weight: </h3>
            <span>This breed can weigh between {min_weight ? `${min_weight} ` : 'Unknown '}
                and {max_weight ? max_weight : 'Unknown'} kilograms.
            </span>
          </div>
        </div>
      </section>
    </div>
    )
  }
    
  return (
    <>{display}</>
  )
};

export default CardDetail;