import axios from "axios";
import { BOOK_API } from "../config";

export const _login = (data) => {
  return axios({
    method: "POST",
    url: `${BOOK_API}/auth/login`,
    data,
  });
};

export const _register = (data) => {
  return axios({
    method: "POST",
    url: `${BOOK_API}/auth/register`,
    data,
  });
};
