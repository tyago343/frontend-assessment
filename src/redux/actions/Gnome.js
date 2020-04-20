
import {
    FETCHGNOMES,
    SELECTGNOME,
    PROFESSIONS,
    SELECTPROFESSION
} from "../constants";

export const fetchGnomes = gnomes => ({
    type: FETCHGNOMES,
    payload: gnomes
});
export const selectGnome = gnome => ({
    type: SELECTGNOME,
    payload: gnome
});
export const registerProfessions = professions => ({
    type: PROFESSIONS,
    payload: professions
});
export const selectProfession = profession => ({
    type: SELECTPROFESSION,
    payload: profession
});