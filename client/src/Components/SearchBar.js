import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName, cleanHome } from './../Redux/actions/index';

const SearchBar = ({ setPageNumber }) => {

  const dispatch = useDispatch()
  const [search, setSearch] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(cleanHome());

    if (search.length === 0) {
      return alert("Please input a name to start the search");
    } else {
      dispatch(searchByName(search));
      setSearch('');
    }
    setPageNumber(1);

  };

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