import {DATA_REQUEST, DATA_LOAD, ADD_PAGE, REFRESH_PROJECTS} from "../../constants/action-types";

const initialState = {
    projectList: [],
    page: 1,
    perPage: 50
};

export function projectList(state = initialState, action) {
    switch (action.type) {
        case DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
                page: action.payload.page,
                perPage: action.payload.perPage
            };
        case DATA_LOAD:
            console.log(action.payload);
            return Object.assign( {}, state, {
                projectList: state.projectList.concat(action.payload),
                isLoading: false
            });
        case ADD_PAGE:
            console.log(action.payload);
            return {
                ...state,
                page: action.payload.page
            };
        case REFRESH_PROJECTS:
            return {
                ...state,
                projectList: [],
                isLoading: true
            };
        default:
            return state;
    }
}
