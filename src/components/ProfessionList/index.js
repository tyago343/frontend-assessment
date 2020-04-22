import React from "react";
import { Div, Profession, H3 } from "./styles";
const ProfessionList = ({ gnome, display, detailPage }) => {
    return (
        <Div display={display} detailPage={detailPage}>
            <H3>Professions:</H3>

            {(gnome.professions &&
                gnome.professions.map((elem, index) => (
                    <Profession key={index}>
                        {" "}
                        {elem}
                        {index !== gnome.professions.length - 1 ? "," : "."}
                    </Profession>
                ))) ||
                "This one have no profession. :O"}
        </Div>
    );
};

export default ProfessionList;
