import React from 'react';
import './style.css';

const LibraryView = ({ children }) => {
  return (
    <div className='container'>
      <div className='yourLibrary'>
        <h3>Your Library</h3>
      </div>
      <div className='savedBooks'>{children}</div>
    </div>
  );
};

export default LibraryView;
