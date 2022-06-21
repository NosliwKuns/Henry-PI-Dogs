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
      setSearch('');
    }
  }
  return (
    <div className='search-bar'>
      <form>
        <input 
          id="searchBar" 
          className="searchbar" 
          type="text" 
          value={search}
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          />
        <div>
        <button
          className='btn-search'
          onClick={handleClick}
          >.
        </button>
        <img src="https://img.icons8.com/ios-filled/50/undefined/search--v1.png" alt='search'/>
        </div>
      </form>
    </div>
  )
};

export default SearchBar;