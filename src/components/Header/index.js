import React, { Fragment } from "react";
import { connect } from "react-redux";

import { HeaderWrapper, PopulationLegend, H1 } from "./styles";
import ProfessionBox from "../ProfessionBox";

const Header = ({ gnomes, selectedProfession }) => {
    return (
        <Fragment>
            <HeaderWrapper>
                <H1>Brastlewark</H1>
                <p>{selectedProfession}</p>
                <PopulationLegend>Population: {gnomes.length}</PopulationLegend>
            </HeaderWrapper>
            <ProfessionBox />
        </Fragment>
    );
};
const mapStateToProps = (state) => ({
    gnomes: state.gnomes,
    selectedProfession: state.professions.selectedProfession,
});

export default connect(mapStateToProps, undefined)(Header);
