import {DATA_REQUEST_MERGES, GENERATE_LIST, NEW_MERGE_LIST, REFRESH_MERGES_LIST} from "../constants/action-types"

export function getMergeRequests() {
    return {type: DATA_REQUEST_MERGES}
}

export function newMergeList(payload) {
    return {type: NEW_MERGE_LIST, payload}
}

export function refreshMergesList() {
    return {type: REFRESH_MERGES_LIST}
}

export function generateList() {
    return {type: GENERATE_LIST}
}
