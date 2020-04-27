import styled from "styled-components";

export const Div = styled.div`
    position: ${({ detailPage }) => (detailPage ? "relative" : "absolute")};
    background-color: ${({ detailPage }) => (detailPage ? "none" : "#0563af")};
    padding: ${({ detailPage }) => (detailPage ? "0" : "25px 15px")};
    max-width: ${({ detailPage }) => (detailPage ? "unset" : "320px")};
    width: ${({ detailPage }) => (detailPage ? "unset" : "100%")};
    border-radius: 5px;
    overflow: visible;
    z-index: 10;
    color: ${({ detailPage }) => (detailPage ? "unset" : "#cccccc")};
    @media screen and (max-width: 626px) {
        bottom: ${({ detailPage }) => (detailPage ? "unset" : "95px")};
    }
`;
export const H3 = styled.h3``;
export const Profession = styled.li``;
export const List = styled.ol`
    max-width: 150px;
    margin: auto;
    @media screen and (max-width: 626px) {
        list-style-type: ${({ detailPage }) =>
            detailPage ? "decimal" : "none"};
    }
`;
