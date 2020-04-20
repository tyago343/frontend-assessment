import { SELECTGNOME } from "../constants";
const initialState = {};
export default (state = initialState, action) => {
    switch (action.type) {
        case SELECTGNOME:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};
