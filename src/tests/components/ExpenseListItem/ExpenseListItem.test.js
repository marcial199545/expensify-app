import React from "react";
import { shallow } from "enzyme";
import ExpenseListItem from "../../../components/ExpenseListItem/ExpenseLIstItem.jsx";
import expenses from "../../fixtures/expenses";

test("should render a expense list item", () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});
