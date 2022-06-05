import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDogs } from '../Redux/actions'

const Cards = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDogs());
  }, [dispatch]);

  const dogs = useSelector(state => state.allDogs)

  let display;
  if(dogs) {
    display = dogs.map(({name, image}) => {
      return (
        <>
        <h1>{name}</h1>
        <img src={image} alt='s'/>
        </>
      )
    })
  } else {
    display = 'Dog not found';
  }
  return (
    <div>
      {display}
    </div>
  )
}

export default Cards;