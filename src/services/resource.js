import axios from "axios";
import { BOOK_API } from "config";

export const makeRequest = (req) => {
  return axios({
    ...req,
    headers: {
      ...req.headers,
    },
  });
};

const Resource = (resourceName) => {
  let url = `${BOOK_API}/${resourceName}`;
  return {
    GET_MANY: (params) =>
      makeRequest({
        method: "get",
        url: url,
        params,
      }),
    GET_ONE: (id) =>
      makeRequest({
        method: "get",
        url: `${url}/${id}`,
      }),
    CREATE: (data) =>
      makeRequest({
        method: "post",
        url: url,
        data,
      }),
    UPDATE: (id, data) =>
      makeRequest({
        method: "patch",
        url: `${url}/${id}`,
        data,
      }),
    DELETE: (id) =>
      makeRequest({
        method: "delete",
        url: `${url}/${id}`,
      }),
  };
};

export default Resource;
