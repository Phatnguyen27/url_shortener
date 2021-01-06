import React,{useState} from "react";
import Input from "../Input";
import Button from "../Button";
import Span from "../Span";
import * as style from "./style";

const InputArea = () => {
    const [input,setInput] = useState("");
    const [result,setResult] = useState("");
    const onClickHandler = () => {
        setResult(input);
    }
    const onTextChangeHandler = (text) => {
        setInput(text);
    }
    return <style.Wrapper>
            <Input value={input} type="text" placeholder="Input" onTextChangeHandler={onTextChangeHandler} id="Input"/>
            <Button onClickHandler={onClickHandler} content="Execute"/>
            <Input value={result} id="Output" placeholder="Output"/>
        </style.Wrapper>
}
export default InputArea;