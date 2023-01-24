const BOOK_ADDED = 'bookstore/books/BOOK_ADDED';
const BOOK_REMOVED = 'bookstore/books/BOOK_REMOVED';

const initialState = [
  { title: 'The Hunger Games', author: 'Suzanne Collins', id: '1' },
  { title: 'Dune', author: 'Frank Herbert', id: '2' },
  { title: 'Capital in the Twenty-First Century', author: 'Suzanne Collins', id: '3' },
];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_ADDED:
      return [...state, action.payload];

    case BOOK_REMOVED:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};

const addBook = (payload) => ({
  type: BOOK_ADDED,
  payload,
});

const removeBook = (id) => ({
  type: BOOK_REMOVED,
  payload: { id },
});

export { addBook, removeBook };
export default booksReducer;
