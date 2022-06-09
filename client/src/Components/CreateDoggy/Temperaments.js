import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTemperament } from '../../Redux/actions';

const Temperaments = () => {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState([]);
  const [checkboxes, setCheckboxes] = useState(false);
  const temp = useSelector(state => state.temperaments);


  const showCheckboxes = () => {
      setCheckboxes(!checkboxes) 
  };

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
  }, [dispatch]);
 
  return (

    <div className='multiselect'>
      <div 
        className='selectBox' 
        onClick={showCheckboxes} >
        <section>
          {display.length 
            ? display.map(t => `${t}, `) 
            : 'Select a Temperament'}
        </section>
        <div className='overSelect'></div>
      </div>
      <div className={checkboxes ? 'show' : 'hide'}>
        {
          temp.map(t => {
            return (
            <label htmlFor={t.id} key={t.id}>
              <input 
                type='checkbox'
                checked={display.includes(t.name)}
                id={t.id} 
                value={t.name}
                onChange={checkbox}/> {t.name} 
            </label>
            )
          })
        }
      </div>
    </div>
  )
};

export default Temperaments;

