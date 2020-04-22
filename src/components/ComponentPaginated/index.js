import React, { useState, Fragment } from "react";
import { Paginator, Page } from "./styles";

const ComponentPaginated = ({ data, Component }) => {
    var [page, setPage] = useState(1);
    var [qtyPerPage, setQtyPerPage] = useState(50);
    const handleClick = (evt) => {
        setPage(Number(evt.target.id));
    };
    const indexOfLastGnome = page * qtyPerPage;
    const indexOfFirstGnome = indexOfLastGnome - qtyPerPage;
    const currentGnomes = data.slice(indexOfFirstGnome, indexOfLastGnome);
    const renderGnomes = currentGnomes.map((gnome, index) => {
        return <Component gnome={gnome} key={index} />;
    });

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / qtyPerPage); i++) {
        pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map((number) => {
        if (number + 1 == page || number - 1 == page || number == page) {
            return (
                <Page
                    key={number}
                    id={number}
                    selected={number == page}
                    onClick={handleClick}
                >
                    {number}
                </Page>
            );
        }
    });
    return (
        <Fragment>
            {renderGnomes}
            <Paginator>{renderPageNumbers}</Paginator>
        </Fragment>
    );
};
export default ComponentPaginated;
