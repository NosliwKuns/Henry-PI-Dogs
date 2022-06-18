import React, { useState, useEffect, useLayoutEffect } from 'react';
import '../../scss/HomeView/Filters.scss';
import '../../scss/HomeView/DogHome.scss';
import { filterByTemp } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getTemperament, alphabeticalOrder, comesFrom, getAllDogs, orderByWeight, orderByHeight } from '../../Redux/actions/index';

const Filters = () => {
  const dispatch = useDispatch();
  const bringAllDogs = useSelector(state => state.allDogs);
  const temps = useSelector(state => state.temperaments)

  /*   const [changeTwo, setChangeTwo] = useState(false);
  const [axis, setAxis] = useState({
    x: 0,
    y: 0
  });
  const titleContainer = useRef()
  let regExp = /^[a-dA-D]/;
  let regExpB = /^[e-oE-O]/;
  let regExpC = /^[p-zP-Z]/;
  const one = dogTemp.filter(d => d.name.match(regExp));
  const two = dogTemp.filter(d => d.name.match(regExpB));
  const three = dogTemp.filter(d => d.name.match(regExpC));
  const handleMouseMove = (e) => {
    const width = titleContainer.current.clientWidth;
    const height = titleContainer.current.clientHeight;
    const oX = (e.nativeEvent.offsetX/width) * 100;
    const oY = (e.nativeEvent.offsetY/height) * 100;
    setAxis({
      x: oX,
      y: oY
    })
  }
  const { x, y } = axis;
  const maskStyle = {
    '--maskX' : x,
    '--maskY' : y
  } */
  const handleClickAlph = (e) => {
    if(typeof bringAllDogs === 'string') return alert('Invalid action')
    dispatch(alphabeticalOrder(e.target.value));
  }

  const handleClickFrom = (e) => {
    dispatch(comesFrom(e.target.value));
  }

  const handleClickWeights = (e) => {
    if(typeof bringAllDogs === 'string') return alert('Invalid action')
    dispatch(orderByWeight(e.target.value));
    console.log(bringAllDogs)
  };

  const handleClickHeights = (e) => {
    if(typeof bringAllDogs === 'string') return alert('Invalid action')
    dispatch(orderByHeight(e.target.value));
  }

  const handleClick = (e) => {
    dispatch(filterByTemp(e.target.value));
  };

  return (
    <div className='filter'>
      
      <section className='btn-container'>
        <button value='ASC' onClick={handleClickAlph}> A-Z </button>
        <button value='DESC' onClick={handleClickAlph}> Z-A </button>
        <button value='api' onClick={handleClickFrom}> Api </button>
        <button value='dataBase' onClick={handleClickFrom}> DataBase </button>
        <button value='ASC' onClick={handleClickWeights}> Min Weight </button>
        <button value='DESC' onClick={handleClickWeights}> Max Weight </button>
        <button value='ASC' onClick={handleClickHeights}> Min height </button>
        <button value='DESC' onClick={handleClickHeights}> Max height </button>
      </section>

<div class="accordion"> 
  
  <a href="#" class="accordion-toggle">Filter by temperament:</a>
  <div class="accordion-content"> 
    <div class="accordion-inner"> 
      {
        temps.map(e => 
          <label
            key={`TEM_${e.id}`} 
            className='included'
            htmlFor={e.id}
          >
          <input 
            type='checkbox'
            value={e.name}
            id={e.id}
            onClick={handleClick}
          /> 
            {e.name}
          </label>
        )
      }
    </div> 
   </div> 
</div>

<div class="accordion"> 
  
  <a href="#" class="accordion-toggle">Origin of breeds</a>
  <div class="accordion-content">
    <div class="accordion-inner"> 
      <p>For animate the "height" of element with CSS Transitions you need use "max-height".</p>
      <p>If use the "height: auto", the effect not works. Is necessary some value for the CSS create a CSS animate, and you can use "max-height" with a great value for emulate this effect.</p> 
    </div>
  </div>
</div>

      <div class='melt-leave-active'>
      <div class='melt-enter-active'></div>

      </div> 

    </div>
  )
};

export default Filters;