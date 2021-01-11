import React,{useState} from "react";
import Input from "../Input";
import Button from "../Button";
import Span from "../Span";
import * as style from "./style";
import { connect } from "react-redux";
import * as api from "../../services/api/api.urlshortener";

const InputArea = (props) => {
    const { reducer, dispatchInput } = props;
    const [input,setInput] = useState("");
    const onClickHandler = async () => {
        let output = await api.UrlShortener(input); 
        dispatchInput(output);
    }
    const onTextChangeHandler = (text) => {
        setInput(text);
    }
    return <style.Wrapper>
            <Input value={input} type="text" placeholder="Input" onTextChangeHandler={onTextChangeHandler} id="Input"/>
            <Button name="execute-button" id="execute-button" onClickHandler={onClickHandler} content="Execute"/>
            <Span value={reducer.value} id="Output" placeholder="Output"/>
        </style.Wrapper>
}
export const mapStateToProps = (state, ownProps) => {
    if (state.value === ownProps.input)     return({ reducer: { value: ownProps.input }});
    return({ reducer: state})};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatchInput: (string) => dispatch({ type: "Update Text", value: string})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InputArea);