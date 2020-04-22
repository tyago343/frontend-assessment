import styled from "styled-components";

export const Paginator = styled.ol`
    display: -webkit-box;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px) {
    }
`;
export const Page = styled.li`
    width: ${({ selected }) => (selected ? "120px" : "80px")};
    height: 25px;
    margin: 0 20px;
    border-radius: 999px;
    background: #397;
    cursor: pointer;
    box-shadow: 0 5px 5px -5px rgba(80, 255, 129, 0.15),
        0 10px 10px -5px rgba(80, 255, 129, 0.15),
        0 15px 15px -5px rgba(80, 255, 129, 0.15),
        0 20px 20px -5px rgba(80, 255, 129, 0.15);
    -webkit-transition: 0.25s ease;
    transition: 0.25s ease;
    display: -webkit-box;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 10px;
`;
