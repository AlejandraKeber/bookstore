import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import AddBook from '../components/AddBook';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="container">
      <div className="book-list">
        { books.map((book) => (
          <Book key={book.id} title={book.title} author={book.author} id={book.id} />
        ))}
      </div>
      <AddBook />
    </div>
  );
};

export default Books;
