import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import LibraryView from '../components/LibraryView';
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
      .then((res) => {
        return res;
      })
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  };

  // delet handler
  const handleDelete = (e) => {
    const { id } = e.currentTarget;
    API.deleteBook(id)
      .then((res) => getBooks())
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <Navbar />
      <LibraryView>
        {books.length ? (
          books.map((book, i) => {
            return (
              <BookCard
                key={i}
                id={book._id}
                title={book.title}
                authors={book.authors}
                href={book.href}
                thumbnail={book.thumbnail ? book.thumbnail : NoImage}
                description={
                  book.description
                    ? book.description
                    : 'No Desciption Available for this Title.'
                }
                delete={handleDelete}
              />
            );
          })
        ) : (
          <h3 className='noBooks'>Nothing on your bookshelf yet.</h3>
        )}
      </LibraryView>
    </>
  );
};

export default Library;
