// NAVBAR //
import React from 'react';
import './style.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <form>
                    <p className="tagLine">Find and save your next read.</p>
                    <span>
                        <input className="searchInput" type="text" name="search" placeholder="Search for a book" />
                        <button className="btn searchBtn" type="submit">Submit</button>
                        <button className="btn libraryBtn">Your Library</button>
                    </span>
                </form>
            </nav>
        </div>
    )
};

export default Navbar;