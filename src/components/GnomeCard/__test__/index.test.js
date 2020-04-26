import React from "react";
import {
    render,
    screen,
    cleanup,
    fireEvent,
    getByText,
} from "@testing-library/react";

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
describe("GnomeCard Component", () => {
    test("If Component don't receive gnome, show string", () => {
        const container = render(<GnomeCard />);
        const text = "Gnome was not received";
        expect(container.getByText(text));
    });
    afterEach(cleanup);
    test("Component renders gnome name", () => {
        const container = render(<GnomeCard gnome={gnome} />);
        const testName = "Tobus Quickwhistle";
        expect(screen.queryByText(testName));
    });
});
