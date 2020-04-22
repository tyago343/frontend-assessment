import React, { Fragment } from "react";
import { connect } from "react-redux";
import { HeaderWrapper, PopulationLegend, H1, H1Link } from "./styles";
import ProfessionBox from "../ProfessionBox";

const Header = ({
    gnomes,
    selectedProfession = "all",
    detailPage,
    filteredGnomes,
}) => {
    return (
        <Fragment>
            <HeaderWrapper>
                <H1Link to="/">
                    <H1>Brastlewark</H1>
                </H1Link>
                {detailPage ? `Searched profession: ${selectedProfession}` : ""}
                <PopulationLegend>Population: {gnomes.length}</PopulationLegend>
            </HeaderWrapper>
            {detailPage ? (
                ""
            ) : (
                <ProfessionBox filteredGnomes={filteredGnomes} />
            )}
        </Fragment>
    );
};
const mapStateToProps = (state) => ({
    gnomes: state.gnomes,
    selectedProfession: state.professions.selectedProfession,
});

export default connect(mapStateToProps, undefined)(Header);
