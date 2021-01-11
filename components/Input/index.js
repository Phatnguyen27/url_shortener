import React from 'react';
import * as style from './style';

const Input = (props) => {
    const {value,onTextChangeHandler,name,id} = props;
    return <style.Wrapper name={name} id={id} type="text" onChange={(event) => {onTextChangeHandler(event.target.value)}}></style.Wrapper>
};

export default Input;