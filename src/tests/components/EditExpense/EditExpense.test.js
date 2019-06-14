import React from "react";
import { shallow } from "enzyme";
import expenses from "../../fixtures/expenses";
import { EditExpensePage } from "../../../components/EditExpense/EditExpensePage.jsx";

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage
            editExpense={editExpense}
            removeExpense={removeExpense}
            history={history}
            expense={expenses[2]}
        />
    );
});

test("should render edit expense page correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should handle edit expense", () => {
    const expense = expenses[2];
    wrapper.find("ExpenseForm").prop("onSubmit")(expense);
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(editExpense).toHaveBeenLastCalledWith(expense.id, expense);
});

test("should handle remove expense", () => {
    const expense = expenses[2];
    wrapper.find("button").simulate("click");
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(removeExpense).toHaveBeenLastCalledWith({ id: expense.id });
});
