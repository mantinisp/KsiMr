import {ADD_PAGE, DATA_REQUEST, REFRESH_PROJECTS} from "../constants/action-types"

export function getProjectList(payload) {
    return {type: DATA_REQUEST, payload}
}

export function addPage(payload) {
    return {type: ADD_PAGE, payload}
}

export function refreshProjects() {
    return {type: REFRESH_PROJECTS}
}
