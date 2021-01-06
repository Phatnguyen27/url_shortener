import styled from 'styled-components';

export const Wrapper = styled.button`
    height: ${(props) => props?.theme?.button?.height?.value};
    font-size: ${(props) => props?.theme?.button?.fontSize?.value};
    width: ${(props) => props?.theme?.button?.width?.value};
`;
