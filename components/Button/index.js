import React from 'react';
import * as style from './style';

const Button = (props) => {
    const onclickHandler = () => {
        props.onClickHandler();
    }
    return <style.Wrapper onClick={onclickHandler}>{props.content}</style.Wrapper>
};

export default Button;