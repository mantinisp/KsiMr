import update from "react-addons-update";
import {
    ADD_USER_TOKEN
} from "../../constants/action-types";

const initialState = {
    userToken: ''
};

export function userSettings(state = initialState, action) {
    switch (action.type) {
        case ADD_USER_TOKEN:
            return {
                ...state,
                userToken: action.payload
            };
        default:
            return state;
    }
}
