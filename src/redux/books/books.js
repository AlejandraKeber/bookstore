const BOOK_ADDED = 'bookstore/books/BOOK_ADDED';
const BOOK_REMOVED = 'bookstore/books/BOOK_REMOVED';
const GET_BOOK = 'bookstore/books/GET_BOOK';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appId = 'AlJtrlZysZfqcW8ZFnBI';

const initialState = [];

const booksReducer = (state = initialState, action) => {
  const list = [];
  switch (action.type) {
    case BOOK_ADDED:
      return [...state, action.payload];

    case BOOK_REMOVED:
      return state.filter((book) => book.id !== action.payload);

    case GET_BOOK:
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

const getBook = () => (dispatch) => {
  fetch(`${url}/apps/${appId}/books/`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then(
      (data) => dispatch({ type: GET_BOOK, payload: data }),
    );
};

const addBook = (payload) => (dispatch) => {
  fetch(`${url}/apps/${appId}/books/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(() => dispatch({ type: BOOK_ADDED, payload }));
};

const removeBook = (payload) => (dispatch) => {
  fetch(`${url}/apps/${appId}/books/${payload}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: payload,
    }),
  })
    .then(() => dispatch({ type: BOOK_REMOVED, payload }));
};

export { getBook, addBook, removeBook };
export default booksReducer;
