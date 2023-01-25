import { combineReducers, configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import booksReducer from './books/books';

const reducer = combineReducers({
  categories: categoriesReducer,
  books: booksReducer,
});

const store = configureStore({ reducer });

export default store;
