import React from "react";
import { shallow } from "enzyme";
import Header from "../../../components/Header/Header.jsx";
test("should render header correctly", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();

    // expect(wrapper.find("h1").text()).toBe("Expensify");
    // const renderer = new ReacShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
