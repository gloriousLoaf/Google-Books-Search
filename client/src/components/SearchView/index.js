import React from "react";
// import ResultsContainer from '../ResultsContainer';
import './style.css'

function SearchView({ children }) {
    return (
        <div className="container">
            <div className="results">
                <h3>Results</h3>
            </div>
            <div className="foundBooks">{children}</div>
        </div>
    );
}

export default SearchView;