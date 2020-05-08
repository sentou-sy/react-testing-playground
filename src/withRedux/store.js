import { createStore } from "redux";
import { INCREMENT, DECREMENT } from './actionTypes';

// reducer
function counter(state = { counter: 0 }, action) {
    switch (action.type) {
        case INCREMENT:
            return Object.assign(state, {
                counter: state.counter + 1
            });
        case DECREMENT:
            return Object.assign(state, {
                counter: state.counter - 1
            });
        default:
            return state;
    }
}

let store = createStore(counter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;