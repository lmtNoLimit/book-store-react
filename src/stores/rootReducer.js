import { combineReducers } from "redux";

import authReducers from "./auth/reducers";
import bookReducers from "./books/reducers";

const rootReducer = combineReducers({ authReducers, bookReducers });

export default rootReducer;
