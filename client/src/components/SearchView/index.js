// SEARCHVIEW (container for BookCards) //
import React from 'react';
import './style.css';

const SearchView = ({ children }) => {
  return (
    <div className='container'>
      <div className='results'>
        <h3>Results</h3>
      </div>
      <div className='foundBooks'>{children}</div>
    </div>
  );
};

export default SearchView;
