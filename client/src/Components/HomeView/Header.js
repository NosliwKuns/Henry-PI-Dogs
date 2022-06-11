import React, { useState } from 'react';
import Dog from '../../Images/beagle.jpg';
import DogOne from '../../Images/dog_1.jpg';
import DogTwo from '../../Images/dog_2.jpg';
import '../../scss/HomeView/Header.scss';

const Header = () => {
  let [image, setImage] = useState(Dog);

  setTimeout(() => {
    if(image === Dog) setImage(DogOne);
    if(image === DogOne) setImage(DogTwo);
    if(image === DogTwo) setImage(Dog)
  }, 4000)
  
  console.log(image);

  return (
    <div className='header'>
      <img src={image} alt='nose'/>
    </div>
  )
};

export default Header;