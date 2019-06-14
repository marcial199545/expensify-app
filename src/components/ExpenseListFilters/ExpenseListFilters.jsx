import React, { Component } from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import { setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate } from "../../actions/filterActions.js";

export class ExpenseListFilters extends Component {
    state = {
        calendarFocused: null
    };
    handleFocusChange = calendarFocused => {
        this.setState(() => ({ calendarFocused }));
    };
    handleDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onTextChange = e => {
        this.props.setTextFilter(e.target.value);
    };
    onSortChange = e => {
        const { value } = e.target;
        if (value === "date") {
            this.props.sortByDate();
        } else if (value === "amount") {
            this.props.sortByAmount();
        }
    };

    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={this.onTextChange} />
                <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
                    <option value="amount">Amount</option>
                    <option value="date">Date</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.handleDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.handleFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        );
    }
}
const mapStateToProps = state => ({
    filters: state.filters
});

const mapDispatchToProps = dispatch => ({
    setTextFilter: text => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: startDate => dispatch(setStartDate(startDate)),
    setEndDate: endDate => dispatch(setEndDate(endDate))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExpenseListFilters);
