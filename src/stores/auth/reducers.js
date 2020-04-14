import {
  SET_TOKEN,
  REGISTER,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  LOGOUT,
} from "./actions";
import {
  setAuthToken,
  getAuthToken,
  removeAuthToken,
} from "services/cookiesService";

const initState = {
  loading: false,
  isAuthenticated: !!getAuthToken(),
};

export default function (state = initState, action) {
  switch (action.type) {
    case SET_TOKEN:
      setAuthToken(action.token);
      return {
        ...state,
        isAuthenticated: true,
      };

    case REGISTER:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_FAILED:
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case LOGOUT:
      removeAuthToken();
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}
