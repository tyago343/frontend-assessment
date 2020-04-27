import React, { useEffect } from "react";
import {
    ProfessionTitle,
    ProfessionContainer,
    Select,
    Option,
    H2,
} from "./styles";
import { connect } from "react-redux";
import {
    registerProfessionsUtil,
    selectProfessionUtil,
} from "../../redux/utils/Gnomes";
const ProfessionBox = ({
    gnomes,
    registerProfessions,
    allProfessions,
    selectProfession,
    selectedProfession,
    filteredGnomes,
}) => {
    useEffect(() => {
        let profArr = [];
        gnomes.map((gnome) => {
            gnome.professions.map((prof) => {
                if (profArr.indexOf(prof) === -1) {
                    profArr.push(prof);
                }
            });
        });
        registerProfessions(profArr);
        if (selectedProfession === "" || selectedProfession === undefined) {
            selectProfession("all");
        }
    }, [gnomes, registerProfessions, selectProfession, selectedProfession]);

    const handleSelect = (e) => {
        return selectProfession(e.target.value);
    };

    return (
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
            <H2>
                {`You're filter by: ${selectedProfession}`}
                {selectedProfession !== "all"
                    ? ` and this profession have  ${filteredGnomes.length} workers`
                    : ""}
            </H2>
        </ProfessionContainer>
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
export default connect(mapStateToProps, mapDispatchToProps)(ProfessionBox);
