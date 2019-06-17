export default expenses => {
    const amountArray = expenses.map(expense => expense.amount).reduce((acc, val) => acc + val, 0);
    return amountArray;
};
