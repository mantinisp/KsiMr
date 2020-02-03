import {
    ADD_PAGE,
    DATA_REQUEST,
    REFRESH_PROJECTS,
    SELECT_PROJECT,
    REMOVE_PROJECT,
    ADD_PROJECT_NUMBER
} from "../constants/action-types"

export function getProjectList(payload) {
    return {type: DATA_REQUEST, payload}
}

export function addPage(payload) {
    return {type: ADD_PAGE, payload}
}

export function refreshProjects() {
    return {type: REFRESH_PROJECTS}
}

export function selectProject(payload) {
    return {type: SELECT_PROJECT, payload}
}

export function removeProject(payload) {
    return {type: REMOVE_PROJECT, payload}
}

export function addProjectNumber(payload) {
    return {type: ADD_PROJECT_NUMBER, payload}
}
