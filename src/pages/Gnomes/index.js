import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { WindowScroller, AutoSizer, List } from "react-virtualized";
import GnomeCard from "../../components/GnomeCard";
import Header from "../../components/Header";

const Gnomes = (props) => {
    const [filteredGnomes, setFilteredGnomes] = useState([]);
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
    const renderRow = ({ index }) => {
        return <GnomeCard key={index} gnome={filteredGnomes[index]} />;
    };
    return (
        <Fragment>
            <Header />
            <h2>
                You&apos;re filter by: {props.selectedProfession}
                {props.selectedProfession !== "all"
                    ? ` and this profession have  ${filteredGnomes.length} workers`
                    : ""}
            </h2>
            <WindowScroller>
                {({ height, scrollTop }) => (
                    <AutoSizer disableHeight>
                        {({ width }) => (
                            <List
                                autoHeight
                                height={height}
                                width={width}
                                scrollTop={scrollTop}
                                rowHeight={18}
                                rowRenderer={renderRow}
                                rowCount={
                                    filteredGnomes && filteredGnomes.length
                                }
                                overscanRowCount={5}
                            />
                        )}
                    </AutoSizer>
                )}
            </WindowScroller>
        </Fragment>
    );
};
const mapStateToProps = (state) => ({
    gnomes: state.gnomes,
    selectedProfession: state.professions.selectedProfession,
});
export default connect(mapStateToProps, null)(Gnomes);
