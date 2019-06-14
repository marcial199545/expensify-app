import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../../components/AddExpense/AddExpense.jsx";
import expenses from "../../fixtures/expenses";

let onSubmit, history, wrapper;

beforeEach(() => {
    onSubmit = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage addExpense={onSubmit} history={history} />);
});

test("should render add expense page correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should handle submit", () => {
    const expense = expenses[1];
    wrapper.find("ExpenseForm").prop("onSubmit")(expense);
    expect(history.push).toHaveBeenCalledWith("/");
    expect(onSubmit).toHaveBeenCalledWith(expense);
});
