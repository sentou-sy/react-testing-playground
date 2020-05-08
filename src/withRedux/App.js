import React from "react";
import { increment, decrement } from "./actions";
import { useSelector, useDispatch } from "react-redux";

function App() {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Hello World</h1>
            <p>counter: { counter }</p>
            <button onClick={ () => dispatch(increment()) }>Inc</button>
            <button onClick={ ()=> dispatch(decrement()) }>Dec</button>
        </div>
    );
}

export default App;