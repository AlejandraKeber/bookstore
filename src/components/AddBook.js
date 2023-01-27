import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import './AddBook.css';

const AddBook = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const [title, author, category] = e.target;
    dispatch(addBook({
      title: title.value,
      author: author.value,
      category: category.value,
      item_id: uuidv4(),
    }));
    title.value = '';
    author.value = '';
    category.value = '';
  };

  return (
    <div className="add-book-container">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit} className="add-form">
        <input type="text" className="title" name="title" placeholder="Book Title" required />
        <input type="text" className="author" name="author" placeholder="Author" required />
        <input type="text" className="category" name="category" placeholder="Category" required />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
