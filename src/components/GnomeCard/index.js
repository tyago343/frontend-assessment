import React from "react";
import { Link } from "react-router-dom";
import { ProfessionListCard, H2, DataContainer, CardWrapper } from "./styles";
const GnomeCard = ({ gnome }) => {
    return (
        <Link key={gnome.id} to={`/gnome/${gnome.id}`}>
            <CardWrapper>
                <DataContainer>
                    <H2>{gnome.name}</H2>
                    <ProfessionListCard gnome={gnome} />
                </DataContainer>
            </CardWrapper>
        </Link>
    );
};
export default GnomeCard;
