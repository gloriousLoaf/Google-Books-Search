// SEARCHFORM //
import React from 'react';
import './style.css';

const SearchForm = (props) => {
  return (
    <div className='searchBar'>
      <form onSubmit={props.onClick}>
        <input
          className='searchInput'
          type='text'
          name='searchTerm'
          value={props.value}
          onChange={props.onChange}
          placeholder='Search for a book'
        />
        <button className='btn searchBtn' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
