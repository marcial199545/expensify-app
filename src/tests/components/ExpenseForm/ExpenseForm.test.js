import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../../components/ExpenseForm/ExpenseForm.jsx";
import expenses from "../../fixtures/expenses";
import moment from "moment";

test("should render ExpenseForm correctly", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseForm correctly with expense data", () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});

test("should render error for invalid form submission", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find("form").simulate("submit", {
        preventDefault: () => {}
    });
    expect(wrapper.state("error").length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test("should set description state on input change", () => {
    const value = "new description";
    const wrapper = shallow(<ExpenseForm />);
    wrapper
        .find("input")
        .at(0)
        .simulate("change", {
            target: { value, name: "description" }
        });
    expect(wrapper.state("description")).toBe(value);
});

test("should set note state on input change", () => {
    const value = "new note";
    const wrapper = shallow(<ExpenseForm />);
    wrapper
        .find("textarea")
        .at(0)
        .simulate("change", {
            target: { value, name: "note" }
        });
    expect(wrapper.state("note")).toBe(value);
});

test("should set amount state if valid input change", () => {
    const value = "123.00";
    const wrapper = shallow(<ExpenseForm />);
    wrapper
        .find("input")
        .at(1)
        .simulate("change", {
            target: { value, name: "amount" }
        });
    expect(wrapper.state("amount")).toBe(value);
});

test("should not set amount state if valid input change", () => {
    const value = "123.123";
    const wrapper = shallow(<ExpenseForm />);
    wrapper
        .find("input")
        .at(1)
        .simulate("change", {
            target: { value, name: "amount" }
        });
    expect(wrapper.state("amount")).toBe("");
});

test("should call onSubmit with valid data", () => {
    const onSubmitSpy = jest.fn();
    const { description, note, amount, createdAt } = expenses[0];
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find("form").simulate("submit", {
        preventDefault: () => {}
    });
    expect(wrapper.state("error")).toBe("");
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description,
        note,
        amount,
        createdAt
    });
});

test("should set new createdAt state on date change", () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("SingleDatePicker").prop("onDateChange")(now);
    expect(wrapper.state("createdAt")).toEqual(now);
});

test("should set new focused state on focus change", () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("SingleDatePicker").prop("onFocusChange")({ focused });
    expect(wrapper.state("calendarIsFocused")).toBe(focused);
});
