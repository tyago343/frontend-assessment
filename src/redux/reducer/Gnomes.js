import { FETCHGNOMES } from "../constants";
const initialState = [];
export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHGNOMES:
            return Object.assign([], state, action.payload);
        default:
            return state;
    }
};