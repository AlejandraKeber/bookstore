import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import './Book.css';
import progress from '../images/progress.svg';

const Book = (props) => {
  Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  };

  const {
    title, author, id, category,
  } = props;
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <ul className="books">
        <li>
          <div id={id} className="book-container">
            <div className="book-info">
              <div className="book-details">
                <p className="book-category">{category}</p>
                <h2 className="book-title">{title}</h2>
                <p className="book-author">{author}</p>
                <div className="book-button">
                  <button type="button">Comments</button>
                  <button type="button" onClick={handleRemove}>Remove</button>
                  <button type="button">Edit</button>
                </div>
              </div>
              <div className="progress-container">
                <img src={progress} alt="progress" />
                <div className="progress-info">
                  <p className="progress-percent">64%</p>
                  <p className="progress-status">Completed</p>
                </div>
              </div>
              <div className="chapter-container">
                <p className="current-chapter">CURRENT CHAPTER</p>
                <p className="chapter">Chapter 17</p>
                <button type="button" className="chapter-button">UPDATE PROGRESS</button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Book;
