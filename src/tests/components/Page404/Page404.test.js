import React from "react";
import { shallow } from "enzyme";
import Page404 from "../../../components/Page404/Page404.jsx";

test("should render the Page404 component", () => {
    const wrapper = shallow(<Page404 />);
    expect(wrapper).toMatchSnapshot();
});
