// NAVBAR //
import React from 'react';
import './style.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <button className="btn search"><a href="/">Search Books</a></button>
                <button className="btn library"><a href="/saved">Your Library</a></button>
            </nav>
        </div>
    )
};

export default Navbar;