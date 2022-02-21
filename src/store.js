import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./Reducer/Reducer";

const store = createStore(userReducer, composeWithDevTools());
export default store;
