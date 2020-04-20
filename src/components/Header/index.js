import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
    registerProfessionsUtil,
    selectProfessionUtil,
} from "../../redux/utils/Gnomes";
import {
    HeaderWrapper,
    PopulationLegend,
    H1,
    ProfessionTitle,
    ProfessionContainer,
    Select,
    Option,
} from "./styles";

const Header = ({
    gnomes,
    registerProfessions,
    allProfessions,
    selectProfession,
    selectedProfession,
}) => {
    useEffect(() => {
        let profArr = [];
        gnomes.map((gnome) => {
            gnome.professions.map((prof) => {
                if (profArr.indexOf(prof) == -1) {
                    profArr.push(prof);
                }
            });
        });
        registerProfessions(profArr);
        if (selectedProfession == "" || selectedProfession == undefined) {
            selectProfession("all");
        }
    }, [gnomes, registerProfessions, selectProfession, selectedProfession]);

    const handleSelect = (e) => {
        selectProfession(e.target.value);
    };
    return (
        <HeaderWrapper>
            <H1>Brastlewark</H1>
            <ProfessionContainer>
                <ProfessionTitle>Filter by profession:</ProfessionTitle>
                <Select
                    className="professions-select"
                    onChange={handleSelect}
                    value={selectedProfession}
                >
                    <Option value="all">All</Option>
                    {allProfessions &&
                        allProfessions.map((profession, index) => (
                            <Option key={index} value={profession}>
                                {profession}
                            </Option>
                        ))}
                </Select>
            </ProfessionContainer>
            <PopulationLegend>Population: {gnomes.length}</PopulationLegend>
        </HeaderWrapper>
    );
};
const mapStateToProps = (state) => ({
    allProfessions: state.professions.allProfessions,
    gnomes: state.gnomes,
    selectedProfession: state.professions.selectedProfession,
});
const mapDispatchToProps = (dispatch) => ({
    registerProfessions: (profArr) =>
        dispatch(registerProfessionsUtil(profArr)),
    selectProfession: (profession) =>
        dispatch(selectProfessionUtil(profession)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
