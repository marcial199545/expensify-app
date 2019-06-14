import React, { Component } from "react";
import { connect } from "react-redux";
import ExpenseForm from "../ExpenseForm/ExpenseForm.jsx";
import { editExpense, removeExpense } from "../../actions/expensesActions";

export class EditExpensePage extends Component {
    onSubmit = expense => {
        const { id } = this.props.expense;
        this.props.editExpense(id, expense);
        this.props.history.push("/");
    };
    onRemove = () => {
        const { id } = this.props.expense;
        this.props.removeExpense({ id });
        this.props.history.push("/");
    };
    render() {
        return (
            <div>
                <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: data => dispatch(removeExpense(data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditExpensePage);
