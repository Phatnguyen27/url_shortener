import React from 'react';
import * as style from './style';

const Input = (props) => {
    const {value,onTextChangeHandler,id, placeholder} = props;
    return <style.Wrapper id={id} value={value} type="text" placeholder={placeholder} onChange={(event) => {onTextChangeHandler(event.target.value)}}></style.Wrapper>
};

export default Input;