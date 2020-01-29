import {DATA_REQUEST, DATA_LOAD} from "../../constants/action-types";

const initialState = {
    mergeRequests: [],
};

export function mergeRequests(state = initialState, action) {
    switch (action.type) {
        case DATA_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case DATA_LOAD:
            return Object.assign( {}, state, {
                mergeRequests: state.mergeRequests.concat(action.payload), isLoading: false
            });
        default:
            return state;
    }
}
