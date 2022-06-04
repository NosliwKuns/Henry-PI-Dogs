import React from 'react';

const Cards = ({ fetchedData }) => {
  console.log(fetchedData)
  let display;
  if(fetchedData) {
    display = fetchedData.map(({name, image}) => {
      return (
        <>
        <div>{name}</div>
        <img src={image} alt='a' />
        </>
      )
    })
  } else {
    display = 'nop'
  }
  return (
    <div>
      Hola soy el componente tortilla
      {display}
    </div>
  )
};

export default Cards;