import styled from 'styled-components';

export const Wrapper = styled.input`
    height: ${(props) => props?.theme?.input?.height?.value};
    font-size: ${(props) => props?.theme?.input?.fontSize?.value};
    width: ${(props) => props?.theme?.input?.width?.value};
`;
