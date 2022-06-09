import React from 'react';

const Temperaments = ( {temp} ) => {
  return (
    <form>
    <div class="multiselect">
      <div class="selectBox" onclick={() => alert('help')}>
        <select>
          <option>Select an option</option>
        </select>
        <div class="overSelect"></div>
      </div>
      <div id="checkboxes">
        {
          temp.map(t => {
            return (
            <label for={t.id}>
            <input type="checkbox" id={t.id} /> {t.name} </label>
            )
          })
        }
      </div>
    </div>
  </form>
  )
};

export default Temperaments;

