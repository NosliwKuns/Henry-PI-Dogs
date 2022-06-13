import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from './../Redux/actions/index';

const SearchBar = () => {

  const dispatch = useDispatch()
  const [search, setSearch] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    
    if (search.length === 0) {
      return alert("Please input a name to start the search");
    } else {
      dispatch(searchByName(search));
      setSearch("");
    }
  }
  return (
    <>
      <form className="search-bar">
        <input
          type="text"
          className="search"
          value={search}
          placeholder='Search...'
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={handleClick}
          className='btn-search'
        > X
        </button>
      </form>
    </>
  )
};

export default SearchBar;