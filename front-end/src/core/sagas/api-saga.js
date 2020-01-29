import {takeEvery, call, put, take, takeLatest, select} from "redux-saga/effects";
import {DATA_REQUEST, DATA_LOAD, API_ERROR} from "../constants/action-types";
import axios from "axios";

export default function* watcherSaga() {
    yield takeEvery(DATA_REQUEST, workerSaga);
}

function* workerSaga() {
    try {
        const payload = yield call(getMergeRequests);
        yield put({type: DATA_LOAD, payload})
    } catch (e) {
        yield put({type: API_ERROR, payload: e})
    }
}

function getMergeRequests() {
    return axios.get("https://gitlab.nfq.lt/api/v4/projects?pagination=keyset&per_page=50&order_by=id&sort=desc")
            .then((response) => response.data)
}
