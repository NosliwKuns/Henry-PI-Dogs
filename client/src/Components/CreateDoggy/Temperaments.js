import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTemperament } from '../../Redux/actions';
import Image from '../../paw.png';

const Temperaments = () => {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState([]);
  const temp = useSelector(state => state.temperaments);

  const checkbox = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;

    const newArr = checked
      ? [...display, value]
      : [...display.filter(name => name !== value)]

    setDisplay(newArr)
  
  };
  
  useEffect(() =>{
    dispatch(getTemperament())
  }, [dispatch, display]);
 
  return (

    <div className='accordion'>
      <div className='acordeon__item'>
          <label htmlFor="item1" className='accordion__title'>
          {display.length 
            ? display.map(t => t).join(', ')
            : 'Select a Temperament'}
          </label>
          <input type='checkbox' name='accordion' id="item1"/>
          <div className='accordion_content'>
          {
            temp.map(t => {
              let boolean = display.includes(t.name); 
              return (
                <label htmlFor={t.id} key={t.id} className='checkbox'>
                   {t.name}
                  <input 
                    type='checkbox'
                    checked={boolean}
                    id={t.id} 
                    value={t.name}
                    onChange={checkbox}/>
                    {boolean ? <img src={Image}/> : <span></span>}
                </label>  
              )
            })
          }
        </div>
     </div>
    </div>
  )
};

export default Temperaments;
