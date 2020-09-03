import React, { Component } from "react";
import API from "../utils/API";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";
import SearchView from "../components/SearchView";
import BookCard from '../components/BookCard';
import NoImage from './no-image.png';

class GoogleSearch extends Component {

    state = {
        bookSearch: "",
        results: [],
        error: "",
        message: "",
    };

    // search form state handler
    handleInputChange = (e) => {
        this.setState({ bookSearch: e.target.value });
    };

    // submit search handler
    handleSearch = (e) => {
        e.preventDefault();
        // API call
        API.searchBooks(this.state.bookSearch)
            .then((res) => {
                if (res.data.items === "error") {
                    throw new Error(res.data.items);
                } else {
                    // map over results array
                    let searchResult = res.data.items;
                    searchResult = searchResult.map((book) => {
                        book = {
                            key: book.id,
                            id: book.id,
                            title: book.volumeInfo.title,
                            authors: book.volumeInfo.authors,
                            description: book.volumeInfo.description,
                            thumbnail: book.volumeInfo.imageLinks.thumbnail,
                            href: book.volumeInfo.previewLink,
                        }
                        console.log(book)
                        return book;
                    });
                    // empty state
                    this.setState({ results: searchResult, error: "" });
                }
                console.log(res);
            })
            .catch((err) => this.setState({ error: err.items }));
    };

    // save button handler
    handleSave = e => {
        e.preventDefault();
        console.log(e.target.id);
        // save book by id
        let savedBooks = this.state.results.filter(
            book => book.id === e.target.id
        );
        savedBooks = savedBooks[0];
        API.saveBook(savedBooks)
            .then(this.setState({
                results: this.state.results.map(book => {
                    if (book.id === e.target.id) {
                        return book;
                    }
                    return book;
                })
            }))
            .catch((err) => console.log("error", err));
    };

    render() {
        return (
            <>
                <Header />
                <Navbar />
                <SearchForm
                    value={this.state.bookSearch}
                    onClick={this.handleSearch}
                    onChange={this.handleInputChange}
                />

                <SearchView>
                    {this.state.results.length ? (

                        this.state.results.map((book, i) => {
                            return (
                                <BookCard
                                    key={book.id}
                                    id={book.id}
                                    title={book.title}
                                    authors={(book.authors) ? (book.authors[0]) : ("Anonymous")}
                                    href={book.href}
                                    thumbnail={(book.thumbnail) ? (book.thumbnail) : NoImage}
                                    description={(book.description) ? (book.description) : ("No Desciption Available for this Title.")}
                                    save={this.handleSave}
                                    index={i}
                                />
                            )
                        })
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </SearchView>
            </>
        );
    }
}


// import React, { useState, useEffect } from 'react';

// const GoogleSearch = () => {
//     const [books, setBooks] = useState([]);
//     const [bookSearch, setBookSearch] = useState([]);
//     const [searchObject, setSearchObject] = useState({});

//     useEffect(() => {
//         getBooks();
//     }, []);

//     // state = {
//     //     bookSearch: "",
//     //     results: [],
//     //     error: "",
//     //     message: "",
//     // };

//     const getBooks = () => {
//         API.searchBooks()
//             .then((res) => { console.log(res); return res })
//             .then((res) => setBooks(res.data))
//             .catch((err) => console.log(err));
//     }

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setSearchObject({ ...searchObject, [name]: value });
//     }

//     // search form state handler
//     // handleInputChange = (e) => {
//     //     this.setState({ bookSearch: e.target.value });
//     // };

//     // submit search handler
//     const handleSearch = (e) => {
//         e.preventDefault();
//         // API call
//         API.searchBooks({ title: searchObject.title })
//             .then((res) => {
//                 if (res.data.items === "error") {
//                     throw new Error(res.data.items);
//                 } else {
//                     // map over results array
//                     let searchResult = res.data.items;
//                     searchResult = searchResult.map((book) => {
//                         book = {
//                             key: book.id,
//                             id: book.id,
//                             title: book.volumeInfo.title,
//                             authors: book.volumeInfo.authors,
//                             description: book.volumeInfo.description,
//                             thumbnail: book.volumeInfo.imageLinks.thumbnail,
//                             href: book.volumeInfo.previewLink,
//                         }
//                         console.log(book)
//                         return book;
//                     });
//                     // empty state
//                     this.setState({ results: searchResult, error: "" });
//                 }
//                 console.log(res);
//             })
//             .catch((err) => this.setState({ error: err.items }));
//     };

//     // const handleSave = (id) => {
//     //     API.saveBook(id)
//     //         .then((res) => getBooks())
//     //         .catch((err) => console.log(err));
//     // };

//     // save button handler
//     handleSave = e => {
//         e.preventDefault();
//         console.log(e.target.id);
//         // save book by id
//         let savedBooks = this.state.results.filter(
//             book => book.id === e.target.id
//         );
//         savedBooks = savedBooks[0];
//         API.saveBook(savedBooks)
//             .then(this.setState({
//                 results: this.state.results.map(book => {
//                     if (book.id === e.target.id) {
//                         return book;
//                     }
//                     return book;
//                 })
//             }))
//             .catch((err) => console.log("error", err));
//     };

//     return (
//         <>
//             <Header />
//             <Navbar />
//             <SearchForm
//                 value={this.state.bookSearch}
//                 onClick={this.handleSearch}
//                 onChange={this.handleInputChange}
//             />

//             <SearchView>
//                 {this.state.results.length ? (

//                     this.state.results.map((book, i) => {
//                         return (
//                             <BookCard
//                                 key={book.id}
//                                 id={book.id}
//                                 title={book.title}
//                                 authors={(book.authors) ? (book.authors[0]) : ("Anonymous")}
//                                 href={book.href}
//                                 thumbnail={(book.thumbnail) ? (book.thumbnail) : NoImage}
//                                 description={(book.description) ? (book.description) : ("No Desciption Available for this Title.")}
//                                 save={this.handleSave}
//                                 index={i}
//                             />
//                         )
//                     })
//                 ) : (
//                         <h3>No Results to Display</h3>
//                     )}
//             </SearchView>
//         </>
//     );
// }

export default GoogleSearch;