import { combineReducers, configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/Categories';
import booksReducer from './books/Books';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  books: booksReducer,
});

const store = configureStore({ rootReducer });

export default store;
