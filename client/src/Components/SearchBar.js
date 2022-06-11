import React from 'react';

const SearchBar = ({ setSearch }) => {


  const handleChange = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <form className="search-bar">
        <input
          type="text"
          className="search"
          placeholder='Search...'
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={handleChange}
          className='btn-search'
        > X
        </button>
      </form>
    </>
  )
};

export default SearchBar;