import React from 'react';
import * as style from './style';

const Button = (props) => {
    const { onClickHandler, name, id } = props;
    const onclickHandler = () => {
        onClickHandler();
    }
    return <style.Wrapper id = {id} name = {name} onClick={onclickHandler}>{props.content}</style.Wrapper>
};

export default Button;