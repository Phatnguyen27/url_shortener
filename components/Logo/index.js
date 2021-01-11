import React from "react";
import MiniURL from "../../assets/svgs/MiniURL.svg"
import * as style from "./style";

const Logo = () => (
    <style.Wrapper>
        { MiniURL 
        ? <img src={MiniURL} alt="MINI URL"/>
        : <p>{MiniURL === "" ? "Missed!" : "Loading"}</p> }
    </style.Wrapper>
);

export default Logo;