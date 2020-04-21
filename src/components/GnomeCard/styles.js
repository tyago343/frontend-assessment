import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardWrapper = styled.div`
    display: block;
    padding: 0.7em 1.7em;
    margin: 0 0.3em 0.3em 0;
    border-radius: 0.2em;
    box-sizing: border-box;
    text-decoration: none;
    font-weight: 400;
    background-color: #cccccc;
    box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
        inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
        inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
    text-align: right;
`;

export const DataContainer = styled.div`
    width: 100%;
    padding: 0 15px;
`;
export const H2 = styled(Link)`
    color: #000000;
    font-size: 22px;
    text-align: center;
    float: left;
    text-decoration: none;
    font-weight: 700;
    margin: 10px 50px;
`;
export const GnomeLink = styled.div`
    text-decoration: none;
`;
export const ProfessionsButton = styled.button`
    box-shadow: inset 0px 39px 0px -24px #44c767;
    background-color: #44c767;
    border-radius: 4px;
    border: 1px solid #ffffff;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 15px;
    padding: 6px 15px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #b23e35;
    margin-right: 25px;
    &:hover {
        background-color: #5cbf2a;
    }
    &:active {
        position: relative;
        top: 1px;
    }
`;
export const MeetGnomeButton = styled(Link)`
    box-shadow: inset 0px 39px 0px -24px #e67a73;
    background-color: #e4685d;
    border-radius: 4px;
    border: 1px solid #ffffff;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 15px;
    padding: 6px 15px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #b23e35;
    margin-right: 50px;
    &:hover {
        background-color: #eb675e;
    }
    &:active {
        position: relative;
        top: 1px;
    }
`;
