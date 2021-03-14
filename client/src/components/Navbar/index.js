// NAVBAR //
import React from 'react';
import './style.css';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <a className='btn search' href='/'>
          Search Books
        </a>
        <a className='btn library' href='/saved'>
          Your Library
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
