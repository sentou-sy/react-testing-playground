import { INCREMENT, DECREMENT } from "./actionTypes";

// reducer
export function counter(counter = 0, action) {
    switch (action.type) {
    case INCREMENT:
        return counter + 1;
    case DECREMENT:
        return counter - 1;
    default:
        return counter;
    }
};

export default {
    counter
};