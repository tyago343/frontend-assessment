import styled from "styled-components";

export const HeaderWrapper = styled.header`
    margin: 0;
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background-color: #00ff00;
`;
export const H1 = styled.h1`
    margin: 0;
    font-size: 40px;
    font-weight: 900;
`;
export const PopulationLegend = styled.p`
    margin: 0;
    font-size: 40px;
    font-weight: 900;
`;
export const ProfessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
`;
export const ProfessionTitle = styled.p`
    color: #1f7a7a;
`;
export const Select = styled.select`
    width: 100%;
    max-width: 200px;
    background-color: #0563af;
    color: white;
    padding: 12px;
    border: none;
    font-size: 20px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
    -webkit-appearance: button;
    appearance: button;
    outline: none;
`;
export const Option = styled.option`
    padding: 30px;
`;
