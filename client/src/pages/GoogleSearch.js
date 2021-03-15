import React, { useState } from 'react';
import API from '../utils/API';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import SearchForm from '../components/SearchForm';
import SearchView from '../components/SearchView';
import BookCard from '../components/BookCard';
import NoImage from './no-image.png';

const GoogleSearch = () => {
  const [bookSearch, setBookSearch] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    setBookSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    API.searchBooks(bookSearch)
      .then((res) => {
        if (res.data.items === 'error') {
          throw new Error(res.data.items);
        } else {
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
              button: 'Save to Library',
            };
            return book;
          });
          setResults(searchResult);
        }
      })
      .catch((err) => console.log(err.items));
  };

  const handleSave = (e) => {
    e.preventDefault();
    let savedBooks = results.filter((book) => book.id === e.target.id);
    savedBooks = savedBooks[0];
    API.saveBook(savedBooks)
      .then(
        setResults(
          results.map((book) => {
            if (book.id === e.target.id) {
              return {
                ...book,
                button: 'On Bookshelf!',
              };
            } else {
              return book;
            }
          })
        )
      )
      .catch((err) => console.log('error', err));
  };

  return (
    <>
      <Header />
      <Navbar />
      <SearchForm
        value={bookSearch}
        onClick={handleSearch}
        onChange={handleInputChange}
      />

      <SearchView>
        {results.length ? (
          results.map((book, i) => {
            return (
              <BookCard
                key={book.id}
                id={book.id}
                title={book.title}
                authors={book.authors ? book.authors[0] : 'Anonymous'}
                href={book.href}
                thumbnail={book.thumbnail ? book.thumbnail : NoImage}
                description={
                  book.description
                    ? book.description
                    : 'No Desciption Available for this Title.'
                }
                save={handleSave}
                button={book.button}
                index={i}
              />
            );
          })
        ) : (
          <h3 className='noBooks'>No Results to Display</h3>
        )}
      </SearchView>
    </>
  );
};

export default GoogleSearch;
