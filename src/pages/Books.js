import React from 'react';
import Book from '../components/Book';
import AddBook from '../components/AddBook';

const Books = () => (
  <div className="container" style={{ padding: '1em 3em' }}>
    <div className="book-list">
      <Book title="The Hunger Games" author="Suzanne Collins" />
    </div>
    <AddBook />
  </div>
);

export default Books;
