import React from "react";
import renderer from "react-test-renderer";
import Input from "..";

const testProps = {
    value: "test",
    type: "text",
    placeholder: "test",
    onChange: {
        onChange: jest.fn(() => ({}))
    }
}
const component = renderer.create(
    <Input {...testProps}/>
);
const tree = component.toJSON();

test('<Input />', () => {
    expect(tree).toMatchSnapshot();
});