import {
    ADD_USER_TOKEN
} from "../constants/action-types"

export function addUserToken(payload) {
    return {type: ADD_USER_TOKEN, payload}
}
