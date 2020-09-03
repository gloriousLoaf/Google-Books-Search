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

    const handleDelete = (id) => {
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

                            // COMMENT THIS IN AND THE BOOKCARD OUT TO TRY WRITING DIRECTLY HERE
                            // <div className="bookCard">
                            //     <p className="bookTitle" key={books._id}>
                            //         {book.title}
                            //     </p>
                            //     <p className="bookAuthor">
                            //         By {book.authors}
                            //     </p>
                            //     <hr />
                            //     <div>
                            //         <img src={book.thumbnail} alt="Book cover" className="bookImg"></img>
                            //     </div>
                            //     <p className="bookDesc">
                            //         {book.description}
                            //     </p>

                            //     {
                            //         window.location.pathname === "/" ?
                            //             <span>
                            //                 <button className="btn saveBtn" type="button" onClick={book.save}>
                            //                     Save to Library
                            //                 </button>
                            //                 {/* dynamically add check mark on button click with .showCheck ?? */}
                            //                 {/* <img className="check" src={Check} alt="Green check mark"></img> */}
                            //             </span>
                            //             :
                            //             <span>
                            //                 <button className="btn saveBtn" type="button" onClick={() => handleDelete(book._id)}>
                            //                     Delete from Library
                            //                 </button>
                            //             </span>
                            //     }
                            //     <a rel="noopener noreferrer" href={book.href} target="_blank">
                            //         View on Google Books</a>
                            // </div >
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


// EVEN WROTE IT AS A CLASS COMPONENT, WTF??????

// import React, { Component } from "react";

// class Library extends Component {
//     state = {
//         bookShelf: [],
//     };

//     componentDidMount() {
//         API.getSavedBooks()
//             .then((res) => { console.log(res); return res })
//             .then((res) => this.setState({ bookShelf: res.data }))
//             .catch((err) => console.log(err));
//     }

//     //delete book from bookshelf by id
//     handleDelete = (id) => {
//         API.deleteBook(id)
//             .then((res) => this.componentDidMount())
//             .catch((err) => console.log(err));
//     };

//     render() {
//         return (
//             <>
//                 <Header />
//                 <Navbar />
//                 <LibraryView>
//                     {this.state.bookShelf.length ? (
//                         this.state.bookShelf.map((book, i) => {
//                             return (
//                                 <BookCard
//                                     key={book._id}
//                                     id={book._id}
//                                     title={book.title}
//                                     authors={book.author}
//                                     href={book.href}
//                                     thumbnail={(book.thumbnail) ? (book.thumbnail) : NoImage}
//                                     description={(book.description) ? (book.description) : ("No Desciption Available for this Title.")}
//                                     delete={this.handleDelete}
//                                     index={i}
//                                 />
//                             )
//                         })
//                     ) : (
//                             <h3>Nothing on your bookshelf yet.</h3>
//                         )}
//                 </LibraryView>
//             </>
//         );
//     }
// };

// export default Library;


//<div className="bookCard">
// <p className="bookTitle" key={books._id}>
//    {book.title}
// </p>
// <p className="bookAuthor">
//    By {book.authors}
//</p>
// <hr />
// <div>
//     <img src={book.thumbnail} alt="Book cover" className="bookImg"></img>
// </div>
// <p className="bookDesc">
//     {book.description}
// </p>
// 
// {
//     window.location.pathname === "/" ?
//         <span>
//             <button className="btn saveBtn" type="button" onClick={book.save}>
//                 Save to Library
//             </button>
//             {/* dynamically add check mark on button click with .showCheck ?? */}
//             {/* <img className="check" src={Check} alt="Green check mark"></img> */}
//         </span>
//         :
//         <span>
//             <button className="btn saveBtn" type="button" onClick={() => handleDelete(book._id)}>
//                 Delete from Library
//             </button>
//         </span>
// }
// <a rel="noopener noreferrer" href={book.href} target="_blank">
//     View on Google Books</a>
// </div >