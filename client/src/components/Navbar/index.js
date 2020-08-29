// NAVBAR //
import React from 'react';
import './style.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <form className="navOptions">
                    <span>
                        <input className="searchInput" type="text" name="search" placeholder="Search for a book" />
                        <button className="searchBtn" type="submit">Submit</button>
                        <button className="libraryBtn">Your Library</button>
                    </span>
                </form>
            </nav>
        </div>
    )
};

export default Navbar;