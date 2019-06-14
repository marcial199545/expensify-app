import { createStore } from "redux";

//NOTE Action Genereators - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: "INCREMENT_COUNT",
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT_COUNT",
    decrementBy
});

const setCount = ({ value } = {}) => ({
    type: "SET_COUNT",
    value
});

const resetCount = () => ({
    type: "RESET_COUNT"
});
//NOTE create the store with the default state

// NOTE reducer
const countReducer = (state = { count: 0 }, action) => {
    const { type } = action;
    switch (type) {
        case "INCREMENT_COUNT":
            return {
                count: state.count + action.incrementBy
            };
        case "DECREMENT_COUNT":
            return {
                count: state.count - action.decrementBy
            };
        case "SET_COUNT":
            return {
                count: action.value
            };
        case "RESET_COUNT":
            return {
                count: 0
            };

        default:
            break;
    }
};
const store = createStore(countReducer);

//NOTE to watch for changes in the store use store.subscribe, the returning value from this function is a function that allow us to unsubscribe from the state changes
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//NOTE fetch the state before actions
// console.log(store.getState());

//NOTE Actions an object that gets sent to the store to change it

store.dispatch(incrementCount({ incrementBy: 2 }));

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 4 }));

store.dispatch(setCount({ value: 150 }));

store.dispatch(resetCount());

//NOTE we dont see the change of the DECREMENT_COUNT action because we unsubscribed
// unsubscribe();

//NOTE fetch the state after action
// console.log(store.getState());
