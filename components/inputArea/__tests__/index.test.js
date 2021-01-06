import React from "react";
import { fireEvent, screen, render } from "@testing-library/react";
import InputArea from "../";

const component = render(
    <InputArea />
);

test('<InputArea />', () => {
    fireEvent.change(screen.getByText('Input'), {target: { value: 'testing'}})
    fireEvent.click(screen.getByText('Execute'));
    expect(component.getByPlaceholderText('Output')).toBe("testing");
});