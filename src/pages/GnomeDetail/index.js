import React, { useEffect, Fragment } from "react";
import { selectGnomeUtil } from "../../redux/utils/Gnomes";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
    FichaGnome,
    ImgContainer,
    AboutContainer,
    GnomeFriendsContainer,
    GnomeProfessionsContainer,
    GnomeCharacteristicsContainer,
} from "./styles";
import Header from "../../components/Header";

const GnomeDetail = ({ gnome, match, getGnome }) => {
    useEffect(() => {
        getGnome(match.params.id);
    }, [getGnome, match.params.id]);
    return (
        <Fragment>
            <Header detailPage />
            <FichaGnome key={gnome.id}>
                <div>
                    <ImgContainer>
                        <img src={gnome.thumbnail} alt={gnome.name} />
                    </ImgContainer>
                    <div className="about-gnome">
                        <h2>{gnome.name}</h2>
                        <AboutContainer>
                            <GnomeProfessionsContainer>
                                <span> Professiones: </span>
                                <ul>
                                    {gnome.professions
                                        ? gnome.professions.map((prof) => (
                                              <li key={prof} name={prof}>
                                                  {prof}
                                              </li>
                                          ))
                                        : "This one have no profession, he's a little lazy!"}
                                </ul>
                            </GnomeProfessionsContainer>
                            <GnomeCharacteristicsContainer>
                                <span>Characteristics:</span>
                                <ul>
                                    <li>
                                        Hair color:{" "}
                                        <span
                                            style={{ color: gnome.hair_color }}
                                        >
                                            {gnome.hair_color}
                                        </span>
                                    </li>
                                    <li>
                                        Weight:{" "}
                                        <span>
                                            {parseFloat(gnome.weight).toFixed(
                                                2
                                            )}
                                        </span>
                                    </li>
                                    <li>
                                        Height:{" "}
                                        <span>
                                            {parseFloat(gnome.height).toFixed(
                                                2
                                            )}
                                        </span>
                                    </li>
                                    <li>
                                        Age: <span>{gnome.age}</span>
                                    </li>
                                </ul>
                            </GnomeCharacteristicsContainer>
                            <GnomeFriendsContainer>
                                Friends:
                                <ul>
                                    {gnome.friends
                                        ? gnome.friends.map((friend) => (
                                              <li key={friend}>{friend}</li>
                                          ))
                                        : "This gnome isn't very friendly!! :("}
                                </ul>
                            </GnomeFriendsContainer>
                        </AboutContainer>
                    </div>
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
