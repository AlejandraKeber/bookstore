const BOOK_ADDED = 'bookstore/books/BOOK_ADDED';
const BOOK_REMOVED = 'bookstore/books/BOOK_REMOVED';

const initialState = [
  { title: 'The Hunger Games', author: 'Suzanne Collins', id: '1' },
  { title: 'Naked Lunch', author: 'William S. Burroughs', id: '2' },
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

const addBook = () => ({
  type: BOOK_ADDED,
});

const removeBook = () => ({
  type: BOOK_REMOVED,
});

export { addBook, removeBook };
export default booksReducer;
