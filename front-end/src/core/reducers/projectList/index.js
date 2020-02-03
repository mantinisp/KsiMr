import update from "react-addons-update";
import {
    DATA_REQUEST,
    DATA_LOAD,
    ADD_PAGE,
    REFRESH_PROJECTS,
    SELECT_PROJECT,
    REMOVE_PROJECT,
    ADD_PROJECT_NUMBER
} from "../../constants/action-types";

const initialState = {
    projectList: [],
    pickedProjects: [],
    page: 1,
    perPage: 50,
    projectCount: 0
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
            return Object.assign( {}, state, {
                projectList: state.projectList.concat(action.payload),
                isLoading: false
            });
        case ADD_PAGE:
            return {
                ...state,
                page: action.payload.page
            };
        case REFRESH_PROJECTS:
            return {
                ...state,
                projectList: [],
                pickedProjects: state.pickedProjects,
                isLoading: true
            };
        case SELECT_PROJECT:
            return Object.assign( {}, state, {
                pickedProjects: state.pickedProjects.concat(action.payload)
            });
        case REMOVE_PROJECT:
            return {
                ...state,
                pickedProjects: state.pickedProjects.filter((item, index) => index !== action.payload)
            };
        case ADD_PROJECT_NUMBER:
            return {
                ...state,
                projectCount: action.payload
            };
        default:
            return state;
    }
}
