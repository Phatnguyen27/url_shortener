import React from "react";
import * as style from "./style";

const Span = (props) => (
    <style.Wrapper value = {props.value}>{props.value}</style.Wrapper>
);

export default Span;