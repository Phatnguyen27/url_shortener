import React from "react";
import renderer from "react-test-renderer";
import InputArea from "../";
import { Provider } from "react-redux";
import * as redux from "../../../configureStore";
import { createStore } from 'redux';
import { mapStateToProps } from "../";
import TestUtils from "react-dom/test-utils";
import ReactDOM from "react-dom";
import {delay} from "redux-saga/effects";

describe("Render component", () => {
    let container;
    container = renderer.create(<Provider store={createStore(redux.reducer)}><InputArea></InputArea></Provider>);
    const component = container.toJSON();
    it ("should render div tag", () => {
        expect(component.type).toEqual("div");
    });
    it ("should render with 3 children", () => {
        expect(component.children.length).toEqual(3);
    })
    it ("should render first element to be input", () => {
        expect(component.children[0].type).toEqual("input");
    })
    it ("should render first element to be input", () => {
        expect(component.children[1].type).toEqual("button");
    })
    it ("should render first element to be input", () => {
        expect(component.children[2].type).toEqual("a");
    })
    describe ("should render correctly after click button",() => {

        container = null;
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Provider store={createStore(redux.reducer)}><InputArea></InputArea></Provider>, container);
        const input = container.querySelector("input");
        const button = container.querySelector("button");
        const a = container.querySelector("a");
        it ("should render",async () => {
            expect(a.innerHTML).toEqual("NONE");

            input.value = "Full string to test"
            TestUtils.Simulate.change(input);
            TestUtils.Simulate.click(button);
            await delay(3000);
            console.log(a.innerHTML);
            expect(a.innerHTML).toContain("miniurl"); 
        })     
    })
});
describe("The input area component", () => {
    describe('THe container', () => {
        describe("MapStateToProps", () => {
            it ("should map the state to props correctly", () => {
                const state = {value: "String", shortened: "Ministring"};
                const props = {value: "String"};
                const componentState = mapStateToProps(state,props);
                expect(componentState).toEqual({reducer:{value: "String", shortened: "Ministring"}})
            })
        })
    })
});