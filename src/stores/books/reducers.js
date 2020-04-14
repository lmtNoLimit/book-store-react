import {
  GET_BOOKS,
  GET_BOOKS_FAILED,
  GET_BOOKS_SUCCESS,
  ADD_TO_CART,
} from "./actions";

const initState = {
  loading: false,
  books: [],
  cart: [],
};

export default function (state = initState, action) {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        loading: true,
      };
    case GET_BOOKS_FAILED:
      return {
        ...state,
        loading: false,
        books: [],
      };
    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        books: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.id],
      };
    default:
      return state;
  }
}
