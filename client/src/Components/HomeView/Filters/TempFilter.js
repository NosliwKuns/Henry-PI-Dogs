import React from 'react';

const TempFilter = ({ dogs, setFilter, dogTemp }) => {

  return (
    <>
      {
        dogTemp.map(t => {
          return (
            <div className='accordion_cont'>
              {t.name}
            </div>
          )
        })
      }
    </>
  )
};

