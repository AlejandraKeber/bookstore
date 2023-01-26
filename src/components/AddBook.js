import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const [title, author] = e.target;
    dispatch(addBook({ title: title.value, author: author.value, item_id: uuidv4() }));
    title.value = '';
    author.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>ADD NEW BOOK</h2>
      <div className="form-container">
        <input type="text" className="title" name="title" placeholder="Book Title" />
        <input type="text" className="author" name="author" placeholder="Author" />
        <button type="submit">ADD BOOK</button>
      </div>
    </form>
  );
};

export default AddBook;
