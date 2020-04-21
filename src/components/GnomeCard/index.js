import React, { useState } from "react";
import {
    H2,
    DataContainer,
    CardWrapper,
    GnomeLink,
    ProfessionsButton,
    MeetGnomeButton,
} from "./styles";
import ProfessionList from "../ProfessionList";
const GnomeCard = ({ gnome }) => {
    let [display, setDisplay] = useState(false);
    return (
        <GnomeLink key={gnome.id}>
            <CardWrapper>
                <DataContainer>
                    <H2>{gnome.name}</H2>
                    <ProfessionsButton
                        onClick={() => {
                            setDisplay(!display);
                        }}
                    >
                        Professions
                    </ProfessionsButton>
                    <ProfessionList gnome={gnome} display={display} />
                    <MeetGnomeButton to={`/gnome/${gnome.id}`}>
                        Meet gnome
                    </MeetGnomeButton>
                </DataContainer>
            </CardWrapper>
        </GnomeLink>
    );
};
export default GnomeCard;
