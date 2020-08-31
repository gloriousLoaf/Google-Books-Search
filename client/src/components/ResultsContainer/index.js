// RESULTSCONTAINER //
import React from 'react';
import BookCard from '../BookCard';
import './style.css';

const ResultsContainer = (props) => {
    const bookResults = props.booklist;
    return (
        <div className="container">
            {bookResults.map((book, i) => (
                < BookCard
                    key={i}
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors}
                    description={book.volumeInfo.description}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    link={book.volumeInfo.infoLink}
                />
            ))}
        </div>
    );
};

export default ResultsContainer;