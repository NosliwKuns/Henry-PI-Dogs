import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import '../scss/NavBar.scss';

const NavBar = () => {
  return (
    <nav className='a nav-bar'>
      <section className='a'>
      <h1>Hello Doggie!</h1>
      <ul>
        <li><NavLink to='/home'>Home</NavLink></li>
        <li><NavLink to='/create'>Create</NavLink></li>
        <li><NavLink to='/sorpresita'>Sorpresita</NavLink></li>
      </ul>
      <SearchBar />
      </section>
    </nav>
  )
};

export default NavBar;