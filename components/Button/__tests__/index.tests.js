import React from "react";
import renderer from "react-test-renderer";
import Button from "../";
import ReactDOM from "react-dom";
import TestUtils from "react-dom/test-utils";

const testProps = {
    id: "id",
    name: "name",
    content: "button",
    onClickHandler: {
        onClickHandler: jest.fn(() => ({}))
    }
}
const component = renderer.create(
    <Button {...testProps}/>
);
const tree = component.toJSON();

describe("test button component", () => {
    it ("should render correctly", () => {
        expect(tree).toMatchSnapshot();
    })
    it ("should recognise the click event", () => {
        let container;
        const click = jest.fn();
        container = document.createElement("div");
        document.body.appendChild(container);
        ReactDOM.render(<Button {...testProps} onClickHandler={click}/>, container);
        const button = container.querySelector("button");
        TestUtils.act(() => {
            button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
          });
        expect(click).toHaveBeenCalled();
    })
})