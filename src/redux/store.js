import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import Login from "./login/reducer";
import Books from "./books/reducer";
import Author from "./authors/reduce";
import Users from "./users/reduce";
import Copys from "./copy/reducer";

const initialState = {};

const middleware = [thunk];

const rootReducer = combineReducers({
  Login,
  Books,
  Author,
  Users,
  Copys,
});

const AppStore = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default AppStore;
