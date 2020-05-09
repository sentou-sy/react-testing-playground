import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import App from "./withRedux/App";
import store from "./withRedux/store";
import { Provider } from "react-redux";
import "bulma";

// ReactDOM.render(<App />, document.querySelector("#root"));
ReactDOM.render(
    <Provider store={store}>
        <App />    
    </Provider>, 
    document.querySelector("#root")
);