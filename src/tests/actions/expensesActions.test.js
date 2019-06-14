import { addExpense, editExpense, removeExpense } from "../../actions/expensesActions";
import uuid from "uuid";

test("should setup remove expense action object", () => {
    const action = removeExpense({ id: "123abc" });
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    });
});

test("should setup edit expense action object", () => {
    const action = editExpense("123abc", {
        description: "description",
        amount: "123",
        note: "note",
        createdAt: "123456"
    });
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123abc",
        updates: {
            description: "description",
            amount: "123",
            note: "note",
            createdAt: "123456"
        }
    });
});

test("should setup create expense action object with provided values", () => {
    const expenseData = {
        description: "description",
        note: "note",
        amount: 109500,
        createdAt: 1000
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test("should setup create expense action object with default values", () => {
    const defaultData = {
        description: "",
        amount: 0,
        createdAt: 0,
        note: ""
    };
    const action = addExpense(defaultData);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...defaultData,
            id: expect.any(String)
        }
    });
});
