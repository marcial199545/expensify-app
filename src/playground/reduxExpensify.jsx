import { createStore, combineReducers, applyMiddleware } from "redux";
import uuid from "uuid";

//SECTION Actions expenses
const addExpense = ({ description = "", note = "", amount = 0, createdAt = 0 } = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
});
const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});

//SECTION Actions Filters

const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
});
const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"
});
const sortByDate = () => ({
    type: "SORT_BY_DATE"
});
const setStartDate = (date = undefined) => ({
    type: "SET_START_DATE",
    date
});
const setEndDate = (date = undefined) => ({
    type: "SET_END_DATE",
    date
});
//SECTION reducers

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    const { type } = action;
    switch (type) {
        case "ADD_EXPENSE":
            return [...state, action.expense];
        case "REMOVE_EXPENSE":
            return state.filter(({ id }) => id !== action.id);
        case "EDIT_EXPENSE":
            return state.map(expense => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};
const filterReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
};
const filterReducer = (state = filterReducerDefaultState, action) => {
    const { type } = action;
    switch (type) {
        case "SET_TEXT_FILTER":
            return { ...state, text: action.text };
        case "SORT_BY_AMOUNT":
            return { ...state, sortBy: "amount" };
        case "SORT_BY_DATE":
            return { ...state, sortBy: "date" };
        case "SET_END_DATE":
            return { ...state, endDate: action.date };
        case "SET_START_DATE":
            return { ...state, startDate: action.date };
        default:
            return state;
    }
};

//SECTION get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses
        .filter(expense => {
            const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
            const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;
            const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
            return startDateMatch && endDateMatch && textMatch;
        })
        .sort((a, b) => {
            if (sortBy === "date") {
                return a.createdAt < b.createdAt ? 1 : -1;
            } else if (sortBy === "amount") {
                return a.amount < b.amount ? 1 : -1;
            }
        });
};
//SECTION Store creation and subscribe
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

//SECTION dispatchs

//NOTE addExpense
const expenseOne = store.dispatch(
    addExpense({
        description: "rent",
        note: "this is its note",
        amount: 123,
        createdAt: 1000
    })
);
const expenseTwo = store.dispatch(
    addExpense({
        description: "this is another expense",
        amount: 12345,
        createdAt: -1000
    })
);

//NOTE editExpense
// store.dispatch(editExpense(expenseOne.expense.id, { amount: 333 }));

//NOTE removeExpense
// store.dispatch(
//     removeExpense({
//         id: expenseOne.expense.id
//     })
// );

//NOTE setTextFilter
// store.dispatch(setTextFilter("rent"));
// store.dispatch(setTextFilter());

//NOTE sortByAmount and sortByDate
store.dispatch(sortByAmount());
store.dispatch(sortByDate());

//NOTE setStartDate
// store.dispatch(setStartDate(-1000));
//NOTE setEndDate
// store.dispatch(setEndDate(1000));

const demoState = {
    expenses: [
        {
            id: "sdfsafd",
            description: "January Rent",
            note: "This was the final payment for that address",
            amount: 54500,
            createdAt: 0
        }
    ],
    filter: {
        text: "rent",
        sortBy: "amount", //date or amount
        startDate: undefined,
        endDate: undefined
    }
};
