import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import GnomeCard from "../index";

const gnome = {
    id: 0,
    name: "Tobus Quickwhistle",
    thumbnail:
        "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
    age: 306,
    weight: 39.065952,
    height: 107.75835,
    hair_color: "Pink",
    professions: [
        "Metalworker",
        "Woodcarver",
        "Stonecarver",
        " Tinker",
        "Tailor",
        "Potter",
    ],
    friends: ["Cogwitz Chillwidget", "Tinadette Chillbuster"],
};
test("Component renders gnome name", () => {
    const container = render(<GnomeCard gnome={gnome} />);
});
