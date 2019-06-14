import React from "react";
import { render } from "react-dom";

//NOTE Routes
import AppRouter from "./routes/AppRouter.jsx";

//NOTE Styles
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

//NOTE Redux imports
import { Provider } from "react-redux";
import configureStore from "./store/configureStore.js";

const reduxStore = configureStore();

const jsx = (
    <Provider store={reduxStore}>
        <AppRouter />
    </Provider>
);

render(jsx, document.getElementById("root"));
