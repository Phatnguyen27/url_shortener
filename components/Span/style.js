import styled from "styled-components";

export const Wrapper = styled.a`
    width: ${(props) => props?.theme?.span?.width?.value};
    height: ${(props) => props?.theme?.span?.height?.value};
    font-size: ${(props) => props?.theme?.span?.fontSize?.value};
`;