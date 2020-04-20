import styled from "styled-components";
import { Link } from "react-router-dom";

export const FichaGnome = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 720px;
    margin: auto;
    min-width: 560px;
    margin-bottom: 70px;
    background-color: #ededee;
`;
export const BackLink = styled(Link)`
    display: block;
    width: 50%;
    max-width: 200px;
    background-color: #00ff00;
    padding: 10px;
    text-align: center;
    margin-bottom: 15px;
`;
export const ImgContainer = styled.div`
    max-width: 100%;
    text-align: center;
`;
export const AboutContainer = styled.div`
    width: 60%;
    margin: auto;
`;
export const GnomeFriendsContainer = styled.div`
    width: 60%;
    margin: auto;
`;
export const GnomeFriendsList = styled.ul`
    margin-top: 10px;
`;
export const GnomeProfessionsContainer = styled.div`
    float: left;
`;
export const GnomeCharacteristicsContainer = styled.div`
    float: right;
`;
