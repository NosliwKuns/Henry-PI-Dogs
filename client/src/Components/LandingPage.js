import React from 'react';
import { Link } from 'react-router-dom';
import DogImages from './DogImages';
import '../scss/LandingPage.scss'


const LandingPage = () => {

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
		<DogImages />
	
	{/* </div> */}
</div>

  )
};

export default LandingPage;