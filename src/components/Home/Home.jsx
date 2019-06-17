import React from "react";
import ExpenseList from "../ExpenseList/ExpenseList.jsx";
import ExpenseListFilters from "../ExpenseListFilters/ExpenseListFilters.jsx";
import ExpensesSummary from "../ExpensesSummary/ExpensesSumary.jsx";

const Home = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);
export default Home;
