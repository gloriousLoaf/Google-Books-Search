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
                        return book;
                    });
                    // empty state
                    this.setState({ results: searchResult, error: "" });
                }
                console.log(res);
            })
            .catch((err) => this.setState({ error: err.items }));
    };

    // // search handler 
    // handleSearch = e => {
    //     e.preventDefault();
    //     if (this.state.bookSearch) {
    //         API.searchBooks(this.state.bookSearch)
    //             .then(res => {

    //                 this.setState({
    //                     results: res.data.items
    //                 })
    //             })
    //             .catch(err => console.log(err));
    //     }
    // }

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

    // // save button handler
    // handleSave = e => {
    //     e.preventDefault();
    //     // get id of book to save
    //     const bookId = e.target.id;
    //     const saveBook = this.state.results[bookId];
    //     console.log(bookId);
    //     // create object for API
    //     const bookData = {
    //         title: saveBook.title,
    //         link: saveBook.previewLink,
    //         thumbnail: saveBook.thumbnail,
    //         authors: saveBook.authors[0],
    //         description: saveBook.description,
    //         id: saveBook.id
    //     }
    //     console.log(bookData);

    //     API.saveBook(bookData.id, bookData)
    //         .then(API.getSavedBooks()
    //             .then(res => {
    //                 this.setState({
    //                     savedBooks: res.data
    //                 })
    //             })
    //         )
    // }

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
                                    handleSave={this.handleSave}
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

export default GoogleSearch;
