import styled from "styled-components";

export const Div = styled.div`
    display: ${({ display }) => (display ? "block" : "none")};
    position: ${({ detailPage }) => (detailPage ? "relative" : "absolute")};
    background-color: ${({ detailPage }) => (detailPage ? "none" : "violet")};
    padding: ${({ detailPage }) => (detailPage ? "0" : "25px 15px")};
    max-width: ${({ detailPage }) => (detailPage ? "unset" : "320px")};
    width: ${({ detailPage }) => (detailPage ? "unset" : "100%")};
    border-radius: 5px;
    overflow: visible;
    z-index: 10;
`;
export const H3 = styled.h3``;
export const Profession = styled.p``;
