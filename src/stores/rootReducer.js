import { combineReducers } from "redux";

import bookReducers from "./books/reducers";

const rootReducer = combineReducers([bookReducers]);

export default rootReducer;
