import React, { Component } from "react";
import API from "../utils/API";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import LibraryView from "../components/LibraryView";
import BookCard from '../components/BookCard';
import NoImage from './no-image.png';

class Library extends Component {
    state = {
        bookShelf: [],
    };

    // pull saved books from db, place on bookshelf
    // THIS IS BROKEN!!!  :(
    // TypeError: Cannot read property 'data' of undefined
    // BUT there are dozens of entries, status 200, check the console.log
    componentDidMount() {
        API.getSavedBooks()
            .then((res) => console.log(res))
            .then((res) => this.setState({ bookShelf: res.data }))
            .catch((err) => console.log(err));
    }

    //delete book from bookshelf by id
    handleDelete = (id) => {
        API.deleteBook(id)
            .then((res) => this.componentDidMount())
            .catch((err) => console.log(err));
    };

    render() {
        return (
            <>
                <Header />
                <Navbar />
                <LibraryView>
                    {this.state.bookShelf.length ? (
                        this.state.bookShelf.map((book, i) => {
                            return (
                                <BookCard
                                    key={book.id}
                                    id={book.id}
                                    title={book.title}
                                    authors={book.author}
                                    href={book.href}
                                    thumbnail={(book.thumbnail) ? (book.thumbnail) : NoImage}
                                    description={(book.description) ? (book.description) : ("No Desciption Available for this Title.")}
                                    delete={this.handleDelete}
                                    index={i}
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
}

export default Library;