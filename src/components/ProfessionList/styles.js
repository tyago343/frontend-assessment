import styled from "styled-components";

export const Div = styled.div`
    display: ${({ display }) => (display ? "block" : "none")};
    position: absolute;
    background-color: violet;
    padding: 25px 15px;
    max-width: 320px;
    width: 100%;
    border-radius: 5px;
    overflow: visible;
    z-index: 10;
`;
export const H3 = styled.h3``;
export const Profession = styled.p``;
