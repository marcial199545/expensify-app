import { setTextFilter, setEndDate, setStartDate, sortByAmount, sortByDate } from "../../actions/filterActions.js";
import moment from "moment";

test("should set Text Filter action object, value provided", () => {
    const action = setTextFilter("test");
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: "test"
    });
});
test("should set Text Filter action object, default value", () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ""
    });
});
test("should set sort by amount action object", () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    });
});
test("should set sort by date action object", () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY_DATE"
    });
});
test("should set start date action object", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        date: moment(0)
    });
});
test("should set end date action object", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        date: moment(0)
    });
});
