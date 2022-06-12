import React from 'react';
import Buttons from './Buttons';
import Temperaments from './Temperaments';

const Filters = ({ dogs, setFilter, temperaments }) => {

  return (
    <div>
      <h1>Mongoouse</h1>
      <Buttons
        dogs={dogs}
        setFilter={setFilter}
      />
      <button /* onClick={clear} */>Clear Filters</button>
      <div class='accordion'>
        <div class="acordeon__item">
          <input type='checkbox' name='accordion' id="item1"/>
          <label htmlFor="item1" class='accordion__title'>Temperament</label>
{/*           <Temperaments 
            temperaments={temperaments}
            setFilter={setFilter}
            dogs={dogs} 
          /> */}
        </div>
        <div class="acordeon__item">
          <input type='checkbox' name="acordeon" id="item2"/>
          <label htmlFor="item2" class='accordion__title'></label>
          {/* <Species setPageNumber={setPageNumber} setSpecies={setSpecies} /> */}
        </div>
        <div class="acordeon__item">
          <input type='checkbox' name="acordeon" id="item3"/>
          <label htmlFor="item3" class='accordion__title'></label>
          {/* <Gender setPageNumber={setPageNumber} setGender={setGender} /> */}
        </div>
		  </div>
    </div>
  )
};

export default Filters;