import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';

const NavBar = ({ setSearch }) => {
  return (
    <nav className='a nav-bar'>
      <h1>Hello Doggie!</h1>
      <ul>
        <li><NavLink to='/home'>Home</NavLink></li>
        <li><NavLink to='/create'>Create</NavLink></li>
        <li><NavLink to='/sorpresita'>Sorpresita</NavLink></li>
      </ul>
      <SearchBar setSearch={setSearch}/>
    </nav>
  )
};

export default NavBar;