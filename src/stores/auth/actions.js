export const REGISTER = "REGISTER";
export const REGISTER_FAILED = "REGISTER_FAILED";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";

export const SET_TOKEN = "SET_TOKEN";
export const LOGOUT = "LOGOUT";

export const setToken = (token) => ({
  type: SET_TOKEN,
  token,
});

export const register = (data) => ({
  type: REGISTER,
  data,
});

export const logout = () => ({
  type: LOGOUT,
});
