// src/store/store.js
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import jobReducer from "./reducers";

const store = createStore(jobReducer, applyMiddleware(thunk));

export default store;
