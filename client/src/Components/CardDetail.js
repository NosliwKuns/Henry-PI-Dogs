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
  let detail = useSelector(state => state.detail)
  return (
    <div>
      <div className={transition}></div>
      <h1>
        {detail.name}
      </h1>
      <img src={detail.image} alt={detail.name} />
      <h3>Height: {detail.height}</h3>
      <h3>Weight: {detail.weight}</h3>
      <h3>Life Span: {detail.life_span}</h3>
      <h3>Temperaments: {detail.temperaments?.map(d => d).join(' , ')}</h3>
      
    </div>
  )
};

export default CardDetail;