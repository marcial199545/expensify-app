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
import { addExpense } from "./actions/expensesActions.js";

const reduxStore = configureStore();

// reduxStore.dispatch(filterActions.sortByDate());
// reduxStore.dispatch(filterActions.sortByAmount());
reduxStore.dispatch(addExpense({ description: "water bill", amount: 4500 }));
reduxStore.dispatch(addExpense({ description: "gas bill", createdAt: 1000 }));
reduxStore.dispatch(addExpense({ description: "rent", amount: 109500 }));

// const state = reduxStore.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
    <Provider store={reduxStore}>
        <AppRouter />
    </Provider>
);

render(jsx, document.getElementById("root"));
