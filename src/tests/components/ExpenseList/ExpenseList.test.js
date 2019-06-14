import React from "react";
import { shallow } from "enzyme";
import { ExpenseList } from "../../../components/ExpenseList/ExpenseList.jsx";
import expenses from "../../fixtures/expenses";

test("should render expeselist with expenses", () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});
test("should render expeselist with empty message", () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});
