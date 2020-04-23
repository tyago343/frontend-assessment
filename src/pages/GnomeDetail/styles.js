import styled from "styled-components";

export const FichaGnome = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
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
