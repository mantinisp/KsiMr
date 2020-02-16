import {
    DATA_LOAD_MERGES,
    DATA_REQUEST_MERGES,
    NEW_MERGE_LIST,
    GENERATE_LIST,
    REFRESH_MERGES_LIST
} from "../../constants/action-types";

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
        case NEW_MERGE_LIST:
            return Object.assign({}, state, {
                ...state,
                newList: state.newList.concat(action.payload)
            });
        case REFRESH_MERGES_LIST:
            return {
                ...state,
                mergeRequests: []
            };
        case GENERATE_LIST:
            return {
                ...state,
                mergeRequests: state.newList
            };
        default:
            return state;
    }
}
