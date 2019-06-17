import selectExpensesTotal from "../../selectors/expense-total";
import expenses from "../fixtures/expenses";

test("should return 0 if no expenses", () => {
    const result = selectExpensesTotal([]);
    expect(result).toBe(0);
});
test("should correctly add a single expense", () => {
    const result = selectExpensesTotal([expenses[0]]);
    expect(result).toBe(195);
});
test("should return sum of amounts of the expenses", () => {
    const result = selectExpensesTotal(expenses);
    expect(result).toBe(114195);
});
