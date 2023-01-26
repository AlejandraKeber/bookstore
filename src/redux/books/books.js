import { createAsyncThunk } from '@reduxjs/toolkit';

const BOOK_ADDED = 'bookstore/books/BOOK_ADDED';
const BOOK_REMOVED = 'bookstore/books/BOOK_REMOVED';
const GET_BOOK = 'bookstore/books/GET_BOOK';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appId = 'fl3dvWeSoMBunu6dAXjO';

const initialState = [];

const booksReducer = (state = initialState, action) => {
  const list = [];
  switch (action.type) {
    case `${BOOK_ADDED}/fulfilled`:
      return [...state, action.payload];

    case `${BOOK_REMOVED}/fulfilled`:
      return state.filter((book) => book.item_id !== action.payload);

    case `${GET_BOOK}/fulfilled`:
      Object.keys(action.payload).forEach((element) => {
        const book = action.payload[element][0];
        book.item_id = element;
        list.push(book);
      });
      return list;

    default:
      return state;
  }
};

const getBook = createAsyncThunk(GET_BOOK, async () => {
  const result = await
  fetch(`${url}/apps/${appId}/books/`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });
  const json = result.json();
  return json;
});

const addBook = createAsyncThunk(BOOK_ADDED, (payload) => {
  fetch(`${url}/apps/${appId}/books/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  return payload;
});

const removeBook = createAsyncThunk(BOOK_REMOVED, (payload) => {
  fetch(`${url}/apps/${appId}/books/${payload}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: payload,
    }),
  });
  return payload;
});

export { getBook, addBook, removeBook };
export default booksReducer;
