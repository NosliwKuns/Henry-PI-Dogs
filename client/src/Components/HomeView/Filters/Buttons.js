import React from 'react';

const Buttons = ({ dogs, setFilter }) => {

  const newArrDogs = dogs.map(e => e);
  const orderAZ = [...newArrDogs.sort((a, b) => a.name.localeCompare(b.name))];
  const orderZA = [...newArrDogs.sort((a, b) => b.name.localeCompare(a.name))];                          

  return (
    <>
      <button onClick={(e) => {
          setFilter(orderAZ);
          }
        }
        >
          A-Z
      </button>
      <button onClick={(e) => {
          setFilter(orderZA);
          }
        }
        >
          Z-A
      </button>
    </>
  )
};

export default Buttons;