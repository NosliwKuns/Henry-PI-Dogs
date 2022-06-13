import React, { useState, useRef } from 'react';
import Buttons from './Buttons';
import '../../../scss/HomeView/Filters.scss';

const Filters = ({ dogs, setFilter, dogTemp, change, setChange }) => {
  const [changeTwo, setChangeTwo] = useState(false);
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
  }
  return (
    <div className='filter'>
    <div className='holi' ref={titleContainer} onMouseMove={handleMouseMove} style={maskStyle}>
      <div className='titleWrapper'>
          <h1>Hola</h1>
      </div>
      <div className='titleWrapper cloneWrapper'>
          <h1>Hola</h1>
      </div>
    </div>
     {/*  <h1>Mongoouse</h1>
      <Buttons
        dogs={dogs}
        setFilter={setFilter}
      /> */}
      {/* <div class='accordion'>
        <div class="acordeon__item" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
          <input type='checkbox' name='accordion' id="item1" checked={change}/>
          <label htmlFor="item1" class='accordion__title'  >Temperaments A-D</label>
          
        <div className='accordion_content'>
          {
            one.map(e => 
              <div className='included'>{e.name}</div>
            )
          }
        </div>
        </div>
        <div class="acordeon__item" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
          <input type='checkbox' name="acordeon" id="item2" checked={changeTwo}/>
          <label htmlFor="item2" class='accordion__title'>Temperaments E-M</label>
          <div className='accordion_content'>
          {
            two.map(e => 
              <div className='included'>{e.name}</div>
            )
          }
        </div>
        </div>
        <div class="acordeon__item">
          <input type='checkbox' value='three' name="acordeon" id="item3"/>
          <label htmlFor="item3" class='accordion__title'>Temperaments P-W</label>
          <div className='accordion_content'>
          {
            three.map(e => 
              <div className='included'>{e.name}</div>
            )
          }
        </div>
        </div>
		  </div> */}
  <div class="accordion"> 
  
  <a href="#" class="accordion-toggle">Hover for height animate</a>
  <div class="accordion-content">
    {/* <div class="accordion-inner"> */} 
      {
        one.map(e => 
          <div className='included'>{e.name}</div>
        )
      }
      <p>For animate the "height" of element with CSS Transitions you need use "max-height".</p>
      <p>If use the "height: auto", the effect not works. Is necessary some value for the CSS create a CSS animate, and you can use "max-height" with a great value for emulate this effect.</p> 
    </div>
  {/* </div> */}
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