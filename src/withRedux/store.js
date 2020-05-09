import { createStore, combineReducers } from "redux";
import reducers from "./reducers";

const combinedReducers = combineReducers(reducers);

// @ts-ignore
let store = createStore(combinedReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;