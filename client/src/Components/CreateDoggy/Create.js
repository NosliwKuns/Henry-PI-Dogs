import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import validateForm from './ValidateForm';
import { postDog, getAllDogs } from '../../Redux/actions';
import Temperaments from './Temperaments';
import '../../scss/Create.scss';
import DogImages from '../DogImages';

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

  console.log(input.temperament);
  console.log(errors);

  return (
    <div className='b form-create'>
    <div className={transition}></div>
    <section className='center-container'>
    <div className='images-container'>
      <DogImages />
    </div>
    <form onSubmit={handleSubmit}
          className='form-content'>
    <h3>Create you own Doggy</h3>
    <div className='form-container'>
      <div className='form-group'>
        <input
          className='form-input'
          type='text'
          id='name'
          name='name'
          placeholder=' '
          value={input.name}
          onChange={handleChange}  
        />
        <label 
          for='name'
          className='form-label'
        >Name:
        </label>
        <div className='error'>
          <p>{errors.name}</p>
        </div>
      </div>

      <div className='form-group'>
        <input
          className='form-input'
          type='text'
          id='image'
          value={input.image}
          name='image'
          placeholder=' '
          onChange={handleChange}
        />
        <label 
          for='image'
          className='form-label'
        >Image url:
        </label>
        <div className='error'>
          <p>{errors.image}</p>
        </div>
      </div>

      <section>
        <div className='separator'>
          <div className='form-group'>
            <input
              className='form-input'
              type='text'
              id='min_height'
              value={input.min_height}
              name='min_height'
              placeholder=' '
              onChange={handleChange}
            />
            <label 
              for='min_height'
              className='form-label'
            >Min Height:
            </label>
          </div>
          <div className='form-group'>
            <input
              className='form-input'
              type='text'
              id='max_height'
              value={input.max_height}
              name='max_height'
              placeholder=' '
              onChange={handleChange}
            />
            <label 
              for='max_height'
              className='form-label'
            >Max Height:
            </label>
          </div>
        </div>
        <div className='error'>
          <p>{errors.height}</p>
        </div>
      </section>

      <section>
        <div className='separator'>
          <div className='form-group'>
            <input
              className='form-input'
              type='text'
              id='min_weight'
              value={input.min_weight}
              name='min_weight'
              placeholder=' '
              onChange={handleChange}
            />
            <label 
                for='min_weight'
                className='form-label'
            >Min Weight:
            </label>
          </div>

          <div className='form-group'>
            <input
              className='form-input'
              type='text'
              id='max_weight'
              value={input.max_weight}
              name='max_weight'
              placeholder=' '
              onChange={handleChange}
            />
            <label 
                for='max_weight'
                className='form-label'
            >Max Weight:
            </label>
          </div>
        </div>
        <div className='error'>
          <p>{errors.weight}</p>
        </div>
      </section>

      <div className='form-group'>
        <input
          className='form-input'
          type='text'
          id='life_span'
          value={input.life_span}
          name='life_span'
          placeholder=' '
          onChange={handleChange}
        />
        <label 
          for='life_span'
          className='form-label'
        >Life Span:
        </label>
        <div className='error'>
          <p>{errors.life_span}</p>
        </div>
      </div>
      <Temperaments
        input={input} 
        setImput={setImput}
      />
      <div>
          <p>{errors.temperament}</p>
      </div> 
      {/* <div> */}
        {/* <button>Cancel</button> */}
        <button type="submit">
          Create 🐕 
        </button>
      {/* </div> */}
    </div>
    </form>
    </section>
    </div>
  )
};

export default Create;