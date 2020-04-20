import { combineReducers } from "redux";
import gnomes from "./Gnomes.js";
import gnome from "./Gnome.js";
import professions from "./Professions.js";

export default combineReducers({
    gnomes,
    gnome,
    professions
});