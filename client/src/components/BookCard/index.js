// BOOKCARD //
import React from 'react';
// import Check from './check.png';
import './style.css';

const BookCard = (props) => {
  return (
    <div className='bookCard'>
      <p className='bookTitle' key={props._id}>
        {props.title}
      </p>
      <p className='bookAuthor'>By {props.authors}</p>
      <hr />
      <div id='bookImgContainer'>
        <p className='bookDesc'>{props.description}</p>
        <img src={props.thumbnail} alt='Book cover' className='bookImg'></img>
      </div>
      {/* return a Save or Delete button based on URL */}
      {window.location.pathname === '/' ? (
        <span>
          <button
            className='btn saveBtn'
            id={props.id}
            type='button'
            onClick={props.save}
          >
            {props.button}
          </button>
          {/* THIS WILL WORK SOME DAY! dynamically add check mark on button click with .show */}
          {/* <img className={`check ${props.checkVisible}`} src={Check} alt="Green check mark"></img> */}
        </span>
      ) : (
        <span>
          <button
            className='btn saveBtn'
            id={props.id}
            type='button'
            onClick={props.delete}
          >
            Delete from Library
          </button>
        </span>
      )}
      <a rel='noopener noreferrer' href={props.href} target='_blank'>
        View on Google Books
      </a>
    </div>
  );
};

export default BookCard;
