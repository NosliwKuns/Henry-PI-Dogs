import React, { useState } from 'react';
import {Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import '../scss/NavBar.scss';

const NavBar = () => {
  const [ham, setHum] = useState(false)
  const handleClick = (e) => {
    setHum(!ham)
  }
  return (
    <nav className='nav-bar'>
      <div class='nav-container'>
        <h1>Doggy Paw</h1>

        <div class='menu'>
          <Link to='/home' className='is-active'>Home</Link>
          <Link to='/create'>Create</Link>
          <Link to='/favs'>Favs</Link>
          <Link to='/Contact'>Home</Link>
        </div>

        <button 
          className={ham ? `hamburger` : 'hamburger is-active'}
          onClick={handleClick}
          >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
};

export default NavBar;