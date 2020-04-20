import { PROFESSIONS, SELECTPROFESSION } from "../constants";
const initialState = {};
export default (state = initialState, action) => {
    switch (action.type) {
        case PROFESSIONS:
            return Object.assign({}, state, { allProfessions: action.payload });
        case SELECTPROFESSION:
            return Object.assign({}, state, {
                selectedProfession: action.payload
            });
        default:
            return state;
    }
};