import { LOGIN, LOGIN_FAILED, LOGIN_SUCCESS } from "./actions";

const initState = {
  loading: false,
  token: null,
};

export default function (state = initState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.data,
      };

    default:
      return state;
  }
}
