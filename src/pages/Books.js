import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import AddBook from '../components/AddBook';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="container">
      <ul className="book-list" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        { books.map((book) => (
          <Book
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </ul>
      <AddBook />
    </div>
  );
};

export default Books;
