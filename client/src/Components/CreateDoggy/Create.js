import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import validateForm from './ValidateForm';
import { postDog } from '../../Redux/actions';

import '../../scss/Create.scss';
import Temperaments from './Temperaments';

const Create = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState({});
  
  const [input, setImput] = useState({
    name: '',
    image: '',
    weight: '',
    height: 'sa',
    lifeSpan: 'sa',
    temperament: ['Gay']
  

  });


/*   const [checked, useChecked] = useState(false)
  console.log(!checked); */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setImput({
      ...input,
      [name]: value
    });
    setErrors(validateForm({
      ...input,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!input.name){
      return alert('Holi');
    }
    if (!errors.name && !errors.image) {
      alert('Doggy created successfully');
      dispatch(postDog(input));
      setImput({
        name: '',
        image: ''
      });
    } else {
      return alert('Something went wrong. Please try again.');
    }
    history.push('/home');
  };

  console.log(input)
  console.log(errors);

  


  return (
    <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Husky" 
                value={input.name}
                onChange={handleChange}  
              />
              <div>
                <p>{errors.name}</p>
              </div>
            </div>
            <div>
              <label>Image URL:</label>
              <input
                type="url"
                value={input.image}
                name="image"
                placeholder="http://dog.com"
                onChange={handleChange}
              />
              <div>
                {/* <p>{errors.image}</p> */}
              </div>
            </div>
            <div>
              <h4>Heights</h4>
              <label>Min</label>
              <input
                type="number"
                value={input.height}
                name="height"
                placeholder="20"
                onChange={handleChange}
              />
              <div>
                <p>{errors.height_min}</p>
              </div>
              <label>Max</label>
              <input
                type="number"
                value={input.height}
                name="height"
                placeholder="50"
                onChange={handleChange}
              />
              <div>
                <p>{errors.height_max}</p>
              </div>
            </div>
            <div>
              <h4>Weights</h4>
              <label>Min</label>
              <input
                type="number"
                /* value={input.weight_min} */
                name="weight_min"
                placeholder="15"
                /* onChange={(e) => handleChange(e)} */
              />
              <div>
                {/* <p>{errors.weight_min}</p> */}
              </div>
              <label>Max</label>
              <input
                type="number"
                /* value={input.weight_max} */
                name="weight_max"
                placeholder="32"
                /* onChange={(e) => handleChange(e)} */
              />
              <div>
                {/* <p>{errors.weight_max}</p> */}
              </div>
            </div>
            <div>
              <label>Life Span</label>
              <input
                type="text"
                /* value={input.life_span} */
                name="life_span"
                placeholder="12 - 15 years"
                /* onChange={(e) => handleChange(e)} */
              />
            </div>
            <Temperaments />            
            <div>
            
                <button>Cancel</button>
       
              <button type="submit">
                Creat {/* 🐕 */}
              </button>
            </div>
          </form>
  )
};

export default Create;