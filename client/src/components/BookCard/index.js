// BOOKCARD //
import React from 'react';
import './style.css';

const BookCard = (props) => {
  return (
    <div className='bookCard'>
      <p className='bookTitle' key={props._id}>
        {props.title}
      </p>
      <p className='bookAuthor'>By {props.authors}</p>
      <hr />
      <div id='bookContainer'>
        <p className='bookDesc'>{props.description}</p>
        <img src={props.thumbnail} alt='Book cover' className='bookImg'></img>
      </div>
      {/* return a Save or Delete button based on URL */}
      {window.location.pathname === '/' ? (
        <div id='linkContainer'>
          <button
            className='btn saveBtn'
            id={props.id}
            type='button'
            onClick={props.save}
          >
            {props.button}
          </button>
        </div>
      ) : (
        <div id='linkContainer'>
          <button
            className='btn saveBtn'
            id={props.id}
            type='button'
            onClick={props.delete}
          >
            Delete from Library
          </button>
          <a
            className='btn saveBtn'
            rel='noopener noreferrer'
            href={props.href}
            target='_blank'
          >
            View on Google Books
          </a>
        </div>
      )}
    </div>
  );
};

export default BookCard;
