import React from "react";
import { Div, Profession, H3, List } from "./styles";
const ProfessionList = ({ gnome, display, detailPage }) => {
    return (
        <Div display={display} detailPage={detailPage}>
            <H3>Professions:</H3>
            {gnome.professions && gnome.professions.length ? (
                <List detailPage={detailPage}>
                    {gnome.professions.map((elem, index) => (
                        <Profession key={index}>{elem}</Profession>
                    ))}
                </List>
            ) : (
                "This one have no profession"
            )}
        </Div>
    );
};

export default ProfessionList;
