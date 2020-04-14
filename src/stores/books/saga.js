import { all, takeEvery, put, call } from "redux-saga/effects";

import { GET_BOOKS, GET_BOOKS_SUCCESS, GET_BOOKS_FAILED } from "./actions";
import { BookResource } from "services";

function* getBooks() {
  try {
    const res = yield call(BookResource.GET_MANY);
    yield put({
      type: GET_BOOKS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: GET_BOOKS_FAILED,
      payload: error,
    });
  }
}

export default function* () {
  yield all([takeEvery(GET_BOOKS, getBooks)]);
}
