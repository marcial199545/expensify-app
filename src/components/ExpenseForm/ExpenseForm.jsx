import React, { Component } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

class ExpenseForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : "",
            note: props.expense ? props.expense.note : "",
            amount: props.expense ? (props.expense.amount / 100).toString() : "",
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarIsFocused: false,
            error: ""
        };
    }
    handleDateChange = createdAt => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    handleFocusChange = ({ focused }) => {
        this.setState(() => ({
            calendarIsFocused: focused
        }));
    };
    handleChange = e => {
        const { value, name } = e.target;
        if (name === "amount") {
            const regexp = /^[0-9]+(\.\d{0,2})?$/;
            if (!value || value.match(regexp)) {
                this.setState(() => ({
                    [name]: value
                }));
            }
        } else {
            this.setState(() => ({
                [name]: value
            }));
        }
    };
    onSubmit = e => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({
                error: "Please provide description and amount"
            }));
        } else {
            const { description, amount, note, createdAt } = this.state;
            this.props.onSubmit({
                description,
                amount: parseFloat(amount, 10) * 100,
                createdAt: createdAt.valueOf(),
                note
            });
        }
    };
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        name="description"
                        type="text"
                        value={this.state.description}
                        placeholder="Description"
                        onChange={this.handleChange}
                    />
                    <input
                        name="amount"
                        value={this.state.amount}
                        type="text"
                        placeholder="Amount"
                        onChange={this.handleChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.handleDateChange}
                        focused={this.state.calendarIsFocused}
                        onFocusChange={this.handleFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea name="note" value={this.state.note} placeholder="Note" onChange={this.handleChange} />
                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}

export default ExpenseForm;
