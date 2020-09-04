import React, { useState, useEffect } from 'react';
import API from "../utils/API";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import LibraryView from "../components/LibraryView";
import BookCard from '../components/BookCard';
import NoImage from './no-image.png';

const Library = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks();
    }, []);

    // getBooks on load
    const getBooks = () => {
        API.getSavedBooks()
            .then((res) => { console.log(res); return res })
            .then((res) => setBooks(res.data))
            .catch((err) => console.log(err));
    };

    const handleDelete = (e) => {
        const { id } = e.currentTarget;
        console.log(id);
        API.deleteBook(id)
            .then((res) => getBooks())
            .catch((err) => console.log(err));
    };

    return (
        <>
            <Header />
            <Navbar />
            <LibraryView>
                {/* map through books and fill in cards. DELETE DOES NOT WORK : (
                    can't find any good info on how to set prop values as functions
                    inside of .map() HOW DO YOU PASS ARGS WITHOUT MAD LOOPING??? 
                    comment out the jsx and cooment in the BookCard to see the original
                    setup I had. Just throughs 422 onClick, probably because no id is passed
                    to the API. With the jsx, API returns 200 but nothing happens...*/}
                {books.length ? (
                    books.map((book, i) => {
                        return (
                            <BookCard
                                key={i}
                                id={book._id}
                                title={book.title}
                                authors={book.authors}
                                href={book.href}
                                thumbnail={(book.thumbnail) ? (book.thumbnail) : NoImage}
                                description={(book.description) ? (book.description) : ("No Desciption Available for this Title.")}
                                delete={handleDelete}
                            />
                        )
                    })
                ) : (
                        <h3>Nothing on your bookshelf yet.</h3>
                    )}
            </LibraryView>
        </>
    );
}

export default Library;