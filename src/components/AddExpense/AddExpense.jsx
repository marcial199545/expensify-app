import React, { Component } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm.jsx";
import { connect } from "react-redux";
import { addExpense } from "../../actions/expensesActions.js";

export class AddExpensePage extends Component {
    onSubmit = expense => {
        this.props.addExpense(expense);
        this.props.history.push("/");
    };
    render() {
        return (
            <div>
                <h1>Add a expense</h1>
                <ExpenseForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addExpense: expense => dispatch(addExpense(expense))
});

export default connect(
    undefined,
    mapDispatchToProps
)(AddExpensePage);
