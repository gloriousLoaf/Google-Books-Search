// BOOKCARD //
import React from 'react';
import Check from './check.png';
import './style.css';

const BookCard = (props) => {

    return (
        <div className="bookCard">
            <p className="bookTitle">
                {props.title}
            </p>
            <p className="bookAuthor">
                By {props.authors}
            </p>
            <hr />
            <p className="bookDesc">
                {props.description}
            </p>
            <img src={props.thumbnail} alt="book" className="bookImg"></img>
            <a rel="noopener noreferrer" href={props.href} target="_blank">
                Link: {props.href}
            </a>
            {/* return a Save or Delete button based on URL */}
            {window.location.pathname === "/" ?
                <span>
                    <button className="btn saveBtn" data-index={props.index} type="button" onClick={props.save}>
                        Save to Library
                </button>
                    {/* dynamically add check mark on button click with .showCheck ?? */}
                    <img className="check" src={Check} alt="Green check mark"></img>
                </span>
                :
                <span>
                    <button className="btn saveBtn" data-index={props.index} type="button" onClick={props.delete}>
                        Delete from Library
                </button>
                </span>
            }
        </div>
    );
};

export default BookCard;