import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
import SearchView from "../components/SearchView";
import LibraryView from "../components/LibraryView";
import BookCard from "../components/BookCard";
import API from "../utils/API";


class GoogleBooks extends Component {

    state = {
        results: [],
        savedBooks: [],
        bookSearch: ""
    };

    componentDidMount() {
        API.getBooks()
            .then(res => {
                this.setState({
                    savedBooks: res.data
                })
                console.log(this.state.savedBooks)
            })

    }


    //On Button click for searching books 
    handleSearch = e => {

        e.preventDefault();

        if (this.state.bookSearch) {
            API.searchBooks(this.state.bookSearch)
                .then(res =>
                    this.setState({
                        results: res.data.items
                    })
                )
                .catch(err => console.log(err));
        }
    }

    handleInputChange = e => {

        const value = e.target.value;

        this.setState({
            bookSearch: value
        })
    }

    handleSave = e => {
        const bookIndex = e.target.attributes.getNamedItem("data-index").value;
        const saveBook = this.state.results[bookIndex];
        console.log(saveBook);

        const bookData = {
            title: saveBook.volumeInfo.title,
            link: saveBook.volumeInfo.previewLink,
            thumbnail: saveBook.volumeInfo.imageLinks.thumbnail,
            author: saveBook.volumeInfo.authors[0],
            description: saveBook.volumeInfo.description,
            key: saveBook.id
        }

        API.saveBook(bookData.key, bookData)
            .then(API.getSavedBooks()
                .then(res => {
                    this.setState({
                        savedBooks: res.data
                    })
                    console.log("In state", this.state.savedBooks)
                    console.log("Length", this.state.savedBooks.length)
                })
            )
    }

    handleDelete = event => {
        const bookIndex = event.target.attributes.getNamedItem("data-index").value;
        const deleteBook = this.state.savedBooks[bookIndex]
        console.log(deleteBook._id)

        API.deleteBook(deleteBook._id).then(

            window.location.reload()
        )

    }

    render() {
        return (
            <div>
                {window.location.pathname === "/" ?
                    <div>
                        <SearchForm
                            value={this.state.bookSearch}
                            onChange={this.handleInputChange}
                            onClick={this.handleSearch}
                        />

                        <SearchView>
                            {this.state.results.length ? (

                                this.state.results.map((book, i) => {
                                    return (
                                        <BookCard
                                            key={book.id}
                                            title={book.volumeInfo.title}
                                            author={(book.volumeInfo.authors) ? (book.volumeInfo.authors[0]) : ("Anonymous")}
                                            href={book.volumeInfo.previewLink}
                                            thumbnail={(book.volumeInfo.imageLinks) ? (book.volumeInfo.imageLinks.thumbnail) : ("http://blogs.smithsonianmag.com/design/files/2013/03/smiley-face-1.jpg")}
                                            description={book.volumeInfo.description}
                                            save={this.handleSave}
                                            index={i}
                                        />
                                    )
                                })
                            ) : (
                                    <h3>No Results to Display</h3>
                                )}
                        </SearchView>
                    </div>
                    :
                    <LibraryView>
                        {this.state.savedBooks.length ? (

                            this.state.savedBooks.map((book, i) => {
                                return (
                                    <BookCard
                                        key={book._id}
                                        title={book.title}
                                        author={book.author}
                                        href={book.link}
                                        thumbnail={(book.volumeInfo) ? (book.volumeInfo.imageLinks.thumbnail) : ("http://blogs.smithsonianmag.com/design/files/2013/03/smiley-face-1.jpg")}
                                        description={book.description}
                                        delete={this.handleDelete}
                                        index={i}
                                    />
                                )
                            })
                        ) : (
                                <h3>No Saved Books</h3>
                            )}
                    </LibraryView>
                }

            </div>
        )
    }

}

export default GoogleBooks;