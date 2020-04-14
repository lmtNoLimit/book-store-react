export const GET_BOOKS = "GET_BOOKS";
export const GET_BOOKS_FAILED = "GET_BOOKS_FAILED";
export const GET_BOOKS_SUCCESS = "GET_BOOKS_SUCCESS";

export const ADD_TO_CART = "ADD_TO_CART";

// deprecated (because this is client page)
// export const CREATE_BOOK = "CREATE_BOOK";
// export const CREATE_BOOK_FAILED = "CREATE_BOOK_FAILED";
// export const CREATE_BOOK_SUCCESS = "CREATE_BOOK_SUCCESS";

// export const UPDATE_BOOK = "UPDATE_BOOK";
// export const UPDATE_BOOK_FAILED = "UPDATE_BOOK_FAILED";
// export const UPDATE_BOOK_SUCCESS = "UPDATE_BOOK_SUCCESS";

// export const DELETE_BOOK = "DELETE_BOOK";
// export const DELETE_BOOK_FAILED = "DELETE_BOOK_FAILED";
// export const DELETE_BOOK_SUCCESS = "DELETE_BOOK_SUCCESS";

export const getBooks = () => ({
  type: GET_BOOKS,
});

export const addToCart = (id) => ({
  type: ADD_TO_CART,
  id,
});
// export const createBook = (data) => ({
//   type: CREATE_BOOK,
//   data,
// });

// export const updateBook = (data) => ({
//   type: UPDATE_BOOK,
//   data,
// });

// export const deleteBook = (id) => ({
//   type: DELETE_BOOK,
//   id,
// });
