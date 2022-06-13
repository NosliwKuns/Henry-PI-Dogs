import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTemperament } from '../../Redux/actions';
import Image from '../../paw.png';

const Temperaments = ({ input, setImput }) => {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState([]);
  const temp = useSelector(state => state.temperaments);
  console.log(display)

  const checkbox = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;

    const newArr = checked
      ? [...display, value]
      : [...display.filter(name => name !== value)]

    setDisplay(newArr)
    setImput({
      ...input,
      temperament: newArr
    })
  };
  
  useEffect(() =>{
    dispatch(getTemperament())
  }, [dispatch]);
 
  return (

    <div className='checkboxes'>
          <label htmlFor="item1" className='checkboxes_title'>
          {display.length 
            ? display.map(t => t).join(', ')
            : 'Select a Temperament'}
          </label>
          <input type='checkbox' name='checkboxes' id="item1"/>
          <div className='checkbox_content'>
          {
            temp.map(t => {
              let boolean = display.includes(t.name); 
              return (
                <label htmlFor={t.id} key={t.id} className='checkbox'>
                   {t.name}
                  <input 
                    type='checkbox'
                    checked={boolean}
                    name='temperament'
                    id={t.id} 
                    value={t.name}
                    onChange={checkbox}/>
                    {boolean ? <img src={Image} alt='check'/> : <span></span>}
                </label>  
              )
            })
          }
        </div>
    </div>
  )
};

export default Temperaments;

