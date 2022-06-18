import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dog from '../Images/corgi.jpg';
import DogOne from '../Images/saint.jpg';
import DogTwo from '../Images/dog_2.jpg';
import '../scss/LandingPage.scss'


const LandingPage = () => {

	let [image, setImage] = useState(Dog);

  setTimeout(() => {
    if(image === Dog) setImage(DogOne);
    if(image === DogOne) setImage(DogTwo);
    if(image === DogTwo) setImage(Dog)
  }, 4000)

  return (

<div className='landing-page'>
	{/* <div className='grid'> */}
		<div className='text-landing'>
			<h3>Welcome to</h3>
			<h1 className='elegantshadow'>Doggy</h1>
			<h1 className='elegantshadow'>Day</h1>
			<h3>Because every day is a doggy day</h3>
			<Link to='/home'>
			<button class="custom-btn btn-6"><span>Get started</span></button>
			</Link>
		</div>

	<img src={image} alt='nose'/>
	{/* </div> */}
</div>

  )
};

export default LandingPage;