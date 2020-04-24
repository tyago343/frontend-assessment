import styled from "styled-components";
import { Link } from "react-router-dom";
export const FichaGnome = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 95%;
    max-width: 720px;
    margin: 50px auto 70px;
    background-color: #cccccc;
    padding: 25px 30px;
    text-align: center;
    @media screen and (max-width: 625px) {
        padding: 20px 15px;
        margin: 50px auto 0;
        box-sizing: content-box;
        width: 90%;
    }
`;

export const ImgContainer = styled.div`
    max-width: 100%;
    text-align: center;
    margin-bottom: 30px;
    @media screen and (max-width: 625px) {
        margin: 0 auto 30px;
    }
`;
export const AboutContainer = styled.div`
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 625px) {
        flex-direction: column;
        align-items: center;
    }
`;
export const GnomeFriendsContainer = styled.div`
    @media screen and (max-width: 625px) {
        margin-top: 25px;
        max-width: 150px;
        text-align: left;
        width: 100%;
    }
`;
export const GnomeFriendsList = styled.ul``;
export const GnomeProfessionsContainer = styled.div`
    @media screen and (max-width: 625px) {
        text-align: left;
        margin-top: 25px;
        width: 100%;
    }
`;
export const GnomeCharacteristicsContainer = styled.div`
    @media screen and (max-width: 625px) {
        margin-top: 25px;
        max-width: 150px;
        text-align: left;
        width: 100%;
    }
`;
export const Img = styled.img`
    max-width: 350px;
`;
export const BackButton = styled(Link)`
box-shadow: inset 0px 39px 0px -24px #44c767;
background-color: #44c767;
border-radius: 4px;
border: 1px solid #ffffff;
cursor: pointer;
color: #ffffff;
font-family: Arial;
font-size: 15px;
padding: 6px 15px;
text-decoration: none;
text-shadow: 0px 1px 0px #b23e35;
max-width: 120px;
margin-bottom: 20px;
&:hover {
    background-color: #5cbf2a;
}
&:active {
    position: relative;
    top: 1px;
}
@media screen and (max-width: 625px) {
    margin: 10px; 0;
}
`;
