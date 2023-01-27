import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import './Categories.css';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="categories-container">
      <p>{categories}</p>
      <button type="button" onClick={handleClick}>Check status</button>
    </div>
  );
};

export default Categories;
