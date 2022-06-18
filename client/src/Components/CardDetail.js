import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetail } from './../Redux/actions/index';

const CardDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [transition, setTransition] = useState('transition transition-1 is-active');

  useEffect(() => {
    setTransition(transition.split(' ').slice(0, 2).join(' '))
  }, [transition])
  
  useEffect(() => {
    dispatch(getDetail(id))
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
  temps = temperaments.map(e => e.name).join(' , ');
  } else {
    temps = temperaments?.join(' , ');
  }
    
  return (
    <div>
      <div className={transition}></div>
      <h1>
        {name}
      </h1>
      <img src={image} alt={name} />
      <h3>Temperaments:</h3>
      <p>{temps}</p>
      <h3>Height:</h3>
      <p>Min: {min_height ? min_height : 'Unknown'}</p>
      <p>Max: {max_height ? max_height : 'Unknown'}</p>
      <h3>Weight</h3>
      <p>Min: {min_weight ? min_weight : 'Unknown'}</p>
      <p>Max: {max_weight ? max_weight : 'Unknown'}</p>
      <h3>Life Span: </h3>
      <p>{life_span}</p>
    </div>
  )
};

export default CardDetail;