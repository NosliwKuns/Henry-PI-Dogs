import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import validateForm from './ValidateForm';
import { postDog, getAllDogs } from '../../Redux/actions';
import Temperaments from './Temperaments';
import NavBar from '../NavBar';
import '../../scss/Create.scss';

const Create = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const [transition, setTransition] = useState('transition transition-1 is-active');
  const [input, setImput] = useState({
    name: '',
    image: '',
    min_height: '',
    max_height: '',
    min_weight: '',
    max_weight: '',
    life_span: '',
    temperament: []
  });

  useEffect(() => {
    setTransition(transition.split(' ').slice(0, 2).join(' '))
  }, [transition])


  useEffect(() => {
    dispatch(getAllDogs());
  }, [dispatch]);

   const dogs = useSelector(state => state.allDogs)

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
    if(!input.name) {
      return alert('Invalid action');
    }
    if (dogs.find(e => e.name.toLowerCase() === input.name.toLowerCase())) {
      return alert('Doggy name already exists')
    }
    if (!errors.name && !errors.image) {
      alert('Doggy created successfully');
      dispatch(postDog(input));
      setImput({
        name: '',
        image: '',
        min_height: '',
        max_height: '',
        min_weight: '',
        max_weight: '',
        life_span: '',
        temperament: []
      });
    } else {
      return alert('Something went wrong. Please try again.');
    }
    history.push('/home');
  };

  console.log(input);
  console.log(typeof input.min_height);
  console.log(errors);

  return (
    <div>
    <div className={transition}></div>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
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
        <label>Image URL: </label>
        <input
          type='text'
          value={input.image}
          name='image'
          placeholder="http://doggy.com"
          onChange={handleChange}
        />
        <div>
          <p>{errors.image}</p>
        </div>
      </div>

      <div>
        <h3>Height</h3>
        <label>Min: </label>
        <input
          type='text'
          value={input.min_height}
          name='min_height'
          placeholder='20'
          onChange={handleChange}
        />
        <div>
          <p>{errors.min_height}</p>
        </div>

        <label>Max: </label>
        <input
          type='text'
          value={input.max_height}
          name='max_height'
          placeholder='60'
          onChange={handleChange}
        />
        <div>
          <p>{errors.max_height}</p>
        </div>
      </div>

      <div>
        <h3>Weight</h3>
        <label>Min: </label>
        <input
          type='text'
          value={input.min_weight}
          name='min_weight'
          placeholder="24"
          onChange={handleChange}
        />
        <div>
          <p>{errors.min_weight}</p>
        </div>

        <label>Max: </label>
        <input
          type='text'
          value={input.max_weight}
          name='max_weight'
          placeholder="32"
          onChange={handleChange}
        />
        <div>
          <p>{errors.max_weight}</p>
        </div>

      </div>
      <div>
        <label>Life Span: </label>
        <input
          type="text"
          value={input.life_span}
          name="life_span"
          placeholder="12 - 15 years"
          onChange={handleChange}
        />
        <div>
          <p>{errors.life_span}</p>
        </div>
      </div>
      <Temperaments
        input={input} 
        setImput={setImput}
      />  
      <div>
        <button>Cancel</button>
        <button type="submit">
          Creat 🐕 
        </button>
      </div>
    </form>
    </div>
  )
};

export default Create;