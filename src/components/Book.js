import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  };

  const { title, author, id } = props;

  return (
    <div className="book-container">
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button" data-id={id}>Remove</button>
    </div>
  );
};

export default Book;
