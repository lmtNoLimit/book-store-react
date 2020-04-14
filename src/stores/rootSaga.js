import { all, fork } from "redux-saga/effects";

import bookSagas from "./books/saga";

export default function* rootSaga() {
  yield all([fork(bookSagas)]);
}
