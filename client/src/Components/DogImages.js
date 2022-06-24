import React, {useState } from "react";
import Dog from '../Images/corgi.jpg';
import DogOne from '../Images/dog-car.jpg';
import DogTwo from '../Images/dog_2.jpg';

const DogImages = () => {

  let [image, setImage] = useState(Dog);

  setTimeout(() => {
    if(image === Dog) setImage(DogOne);
    if(image === DogOne) setImage(DogTwo);
    if(image === DogTwo) setImage(Dog)
  }, 4000)

  return (
    <>
      <img src={image} alt='nose'/>
    </>
  )
};

export default DogImages;