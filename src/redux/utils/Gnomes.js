import {
    fetchGnomes,
    selectGnome,
    registerProfessions,
    selectProfession,
} from "../actions/Gnome";
import axios from "axios";

export const fetchGnomesUtil = () => (dispatch) => {
    axios
        .get(
            "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
        )
        .then(({ data }) => dispatch(fetchGnomes(data.Brastlewark)));
};

export const selectGnomeUtil = (gnome) => (dispatch) => {
    axios
        .get(
            "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
        )
        .then(({ data }) =>
            data.Brastlewark.find((single) => single.id == gnome)
        )
        .then((gnome) => dispatch(selectGnome(gnome)));
};
export const registerProfessionsUtil = (professions) => (dispatch) => {
    dispatch(registerProfessions(professions));
};
export const selectProfessionUtil = (profession) => (dispatch) => {
    dispatch(selectProfession(profession));
};
