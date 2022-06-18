import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import {Link } from 'react-router-dom';
import '../scss/NavBar.scss';

const NavBar = () => {
  const [ham, setHum] = useState(false)
  const { pathname } = useLocation();
  let match = pathname.slice(1)
  const [active, setActive] = useState(match)

  console.log(match)
  
  const handleClick = (e) => {
    setHum(!ham)
  }

  return (
    <nav className='nav-bar'>
      <div class='nav-container'>
        <h1>Doggy Day</h1>

        <div class='menu'>
          <Link to='/home' 
            className={active === 'home' ? 'is-active' : ''} 
            onClick={() =>  setActive('home')}>
              Home
          </Link>
          <Link to='/create' 
            className={active === 'create' ? 'is-active' : ''} 
            onClick={() =>  setActive('create')}>
              Create
          </Link>
          <Link to='/favs'
            className={active === 'favs' ? 'is-active' : ''} 
            onClick={() =>  setActive('favs')}
            >Favs</Link>
          {/* <Link to='/Contact'>Home</Link> */}
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