import {DATA_REQUEST_MERGES} from "../constants/action-types"

export function getMergeRequests() {
    return {type: DATA_REQUEST_MERGES}
}

export function newMergeList(payload) {
    return {type: "NEW_MERGE_LIST", payload}
}
