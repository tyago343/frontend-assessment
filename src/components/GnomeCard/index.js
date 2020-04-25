import React, { useState } from "react";
import {
    H2,
    DataContainer,
    CardWrapper,
    GnomeLink,
    ProfessionsButton,
    MeetGnomeButton,
    Ctas,
} from "./styles";
import ProfessionList from "../ProfessionList";
const GnomeCard = ({ gnome }) => {
    let [display, setDisplay] = useState(false);
    return (
        <GnomeLink key={gnome.id}>
            <CardWrapper>
                <DataContainer>
                    <H2 to={`/gnome/${gnome.id}`}>{gnome.name}</H2>
                    <Ctas>
                        <ProfessionsButton
                            onClick={() => {
                                setDisplay(!display);
                            }}
                        >
                            {`${display ? "Hide" : "Show"} professions`}
                        </ProfessionsButton>
                        <ProfessionList gnome={gnome} display={display} />
                        <MeetGnomeButton to={`/gnome/${gnome.id}`}>
                            Meet gnome
                        </MeetGnomeButton>
                    </Ctas>
                </DataContainer>
            </CardWrapper>
        </GnomeLink>
    );
};
export default GnomeCard;
