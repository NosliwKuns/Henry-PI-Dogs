import React, { useState, useEffect, useLayoutEffect } from 'react';
import '../../../scss/HomeView/Filters.scss';
import { filterByTemp } from '../../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getTemperament, alphabeticalOrder, comesFrom, getAllDogs } from './../../../Redux/actions/index';

const Filters = () => {
  const dispatch = useDispatch();
  const bringAllDogs = useSelector(state => state.allDogs);
  const temps = useSelector(state => state.temperaments)
  const[sed, setSed] = useState([])

  
  useEffect(() => {
    setSed(bringAllDogs)
  },[sed])

  console.log(sed)
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
    dispatch(alphabeticalOrder(e.target.value));
  }

  const handleClickFrom = (e) => {
    dispatch(comesFrom(e.target.value));
    console.log(bringAllDogs)
  }

  const handleClick = (e) => {
    dispatch(filterByTemp(e.target.value));
  }

  return (
    <div className='filter'>
      <button value='ASC' onClick={handleClickAlph}> A-Z </button>
      <button value='DESC' onClick={handleClickAlph}> Z-A </button>
      <button value='api' onClick={handleClickFrom}> Api </button>
      <button value='dataBase' onClick={handleClickFrom}> DataBase </button>

<div class="accordion"> 
  
  <a href="#" class="accordion-toggle">Hover for height animate</a>
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
  
  <a href="#" class="accordion-toggle">Hover for height animate</a>
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