import {DATA_LOAD_MERGES, DATA_REQUEST_MERGES} from "../../constants/action-types";

const initialState = {
    mergeRequests: [],
    newList: []
};

export function mergeRequests(state = initialState, action) {
    switch (action.type) {
        case DATA_REQUEST_MERGES:
            return {
                ...state,
                isLoading: true
            };
        case DATA_LOAD_MERGES:
            return Object.assign({}, state, {
                ...state,
                newList: [],
                isLoading: false
            });
        case "NEW_MERGE_LIST":
            return Object.assign({}, state, {
                ...state,
                newList: state.newList.concat(action.payload)
            });
        default:
            return state;
    }
}
