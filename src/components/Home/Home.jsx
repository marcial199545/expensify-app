import React from "react";
import ExpenseList from "../ExpenseList/ExpenseList.jsx";
import ExpenseListFilters from "../ExpenseListFilters/ExpenseListFilters.jsx";
const Home = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);
export default Home;
