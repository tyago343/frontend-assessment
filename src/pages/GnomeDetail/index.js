import React, { useEffect, Fragment } from "react";
import { selectGnomeUtil } from "../../redux/utils/Gnomes";
import { connect } from "react-redux";
import {
    FichaGnome,
    ImgContainer,
    AboutContainer,
    GnomeFriendsContainer,
    GnomeCharacteristicsContainer,
    Img,
    BackButton,
} from "./styles";
import Header from "../../components/Header";
import ProfessionList from "../../components/ProfessionList";

const GnomeDetail = ({ gnome, match, getGnome }) => {
    useEffect(() => {
        getGnome(match.params.id);
    }, [getGnome, match.params.id]);
    return (
        <Fragment>
            <Header detailPage />
            <FichaGnome key={gnome.id}>
                <BackButton to="/">Back</BackButton>
                <ImgContainer>
                    <Img src={gnome.thumbnail} alt={gnome.name} />
                </ImgContainer>
                <div className="about-gnome">
                    <h2>{gnome.name}</h2>
                    <AboutContainer>
                        <ProfessionList gnome={gnome} display detailPage />
                        <GnomeCharacteristicsContainer>
                            <h3>Characteristics:</h3>
                            <ul>
                                <li>
                                    Hair color:{" "}
                                    <span style={{ color: gnome.hair_color }}>
                                        {gnome.hair_color}
                                    </span>
                                </li>
                                <li>
                                    Weight:{" "}
                                    <span>
                                        {parseFloat(gnome.weight).toFixed(2)}
                                    </span>
                                </li>
                                <li>
                                    Height:{" "}
                                    <span>
                                        {parseFloat(gnome.height).toFixed(2)}
                                    </span>
                                </li>
                                <li>
                                    Age: <span>{gnome.age}</span>
                                </li>
                            </ul>
                        </GnomeCharacteristicsContainer>
                        <GnomeFriendsContainer>
                            <h3>Friends:</h3>
                            <ul>
                                {gnome.friends
                                    ? gnome.friends.map((friend) => (
                                          <li key={friend}>{friend}</li>
                                      ))
                                    : "This gnome likes to be alone"}
                            </ul>
                        </GnomeFriendsContainer>
                    </AboutContainer>
                </div>
            </FichaGnome>
        </Fragment>
    );
};
const mapStateToProps = (state) => ({
    gnome: state.gnome,
});
const mapDispatchToProps = (dispatch) => ({
    getGnome: (id) => dispatch(selectGnomeUtil(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(GnomeDetail);
