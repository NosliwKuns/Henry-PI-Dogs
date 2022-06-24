import React from 'react';
import Github from '../Images/github.png';
import Linkedin from '../Images/linkedin.png';
import '../scss/About.scss';

const About = () => {
  return (
    <div className='contact'>
      <section>
      <h3>Hi, I'm Antoni, a Full Stack Web Developer.</h3>
      <h3>I made this SPA as an individual project from Henry Bootcamp.</h3>
      <div>
        <a href='https://github.com/NosliwKuns'
           target='_blank' 
           rel='noreferrer'>
          <img src={Github} alt='GitHub' />
        </a>
        <a href='https://www.linkedin.com/in/antoni-quispealaya-a054a2229/' 
           target='_blank' 
           rel='noreferrer'>
          <img src={Linkedin} alt='Linkedin' />
        </a>
      </div>
      </section>
    </div>
  )
};

export default About;