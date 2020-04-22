import styled from "styled-components";

export const ProfessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 25px auto 0;
    text-align: center;
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
export const H2 = styled.h2`
    max-width: 400px;
    width: 100%;
    margin: 25px 0 0;
`;
