import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import GnomeCard from "../../components/GnomeCard";
import Header from "../../components/Header";
import "react-virtualized/styles.css";
import ComponentPaginated from "../../components/ComponentPaginated";
import { ListWrapper } from "./styles";

const Gnomes = (props) => {
    var [filteredGnomes, setFilteredGnomes] = useState([]);

    useEffect(() => {
        if (props.selectedProfession === "all" || !props.selectedProfession) {
            setFilteredGnomes(props.gnomes);
        } else {
            const newArr = [];
            props.gnomes.map((gnome) => {
                if (
                    gnome.professions.find(
                        (prof) =>
                            prof.toLowerCase() ===
                            props.selectedProfession.toLowerCase()
                    )
                ) {
                    newArr.push(gnome);
                }
            });
            setFilteredGnomes(newArr);
        }
    }, [props.selectedProfession, props.gnomes]);

    return (
        <Fragment>
            <Header filteredGnomes={filteredGnomes} />
            <ListWrapper>
                <ComponentPaginated
                    data={filteredGnomes}
                    Component={GnomeCard}
                />
            </ListWrapper>
        </Fragment>
    );
};
const mapStateToProps = (state) => ({
    gnomes: state.gnomes,
    selectedProfession: state.professions.selectedProfession,
});
export default connect(mapStateToProps, null)(Gnomes);
