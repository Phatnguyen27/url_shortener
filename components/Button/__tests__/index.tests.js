import React from "react";
import renderer from "react-test-renderer";
import Button from "..";

const testProps = {
    content: "button",
    onClickHandler: {
        onClickHandler: jest.fn(() => ({}))
    }
}
const component = renderer.create(
    <Button {...testProps}/>
);
const tree = component.toJSON();

test('<Button />', () => {
    expect(tree).toMatchSnapshot();
});