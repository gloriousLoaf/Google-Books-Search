// BOOK //
import React from 'react';
import Check from './check.png';
// import API from "../../utils/API";
import './style.css';

const Book = (props) => {
    const title = props.title;
    const author = props.author;
    const thumbnail = props.thumbnail;
    const description = props.description;
    const link = props.link;

    const book = {
        title: props.title,
        author: props.author,
        thumbnail: props.thumbnail,
        description: props.description,
        link: props.link,
    };

    // API call  -  hmmm??
    // const saveBook = (book) => {
    //     API
    //         .post("/api/books", book)
    //         .then(() => {

    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };

    return (
        <div className="bookCard">
            <p className="bookTitle">
                {title}
            </p>
            <p className="bookAuthor">
                {author}
            </p>
            <hr />
            <p className="bookDesc">
                {description}
            </p>
            <img src={thumbnail} alt="book" className="bookImg"></img>
            <a rel="noopener noreferrer" href={link} target="_blank">
                Link: {link}
            </a>
            <span>
                <button className="btn saveBtn" type="button" onClick={() => saveBook(book)}>
                    Save to Library
                </button>
                {/* dynamically add check mark on button click with .showCheck ?? */}
                <img className="check" src={Check} alt="Green check mark"></img>
            </span>
        </div>
    );
};

export default Book;