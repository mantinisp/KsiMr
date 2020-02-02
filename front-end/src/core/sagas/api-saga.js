import {takeEvery, call, put, take, takeLatest, select} from "redux-saga/effects";
import {gitlabEndpoint, gitHeaders, endpoints} from "../../core/endpoints/endpoints";
import {DATA_REQUEST, DATA_LOAD, API_ERROR, REFRESH_PROJECTS} from "../constants/action-types";
import axios from "axios";

export const currentPage = (state) => state.projectList.page;
export const numberPerPages = (state) => state.projectList.perPage;

export default function* watcherSaga() {
    yield takeEvery(DATA_REQUEST, workerSaga);
    yield takeLatest(REFRESH_PROJECTS, workerSaga);
}

function* workerSaga() {
    try {
        const currPage = yield select(currentPage);
        const perPage = yield select(numberPerPages);
        const payload = yield call(getProjectList, [currPage, perPage]);
        yield put({type: DATA_LOAD, payload})
    } catch (e) {
        yield put({type: API_ERROR, payload: e})
    }
}

function getProjectList(currentPage) {
    return axios.get(gitlabEndpoint + endpoints.GET_PROJECTS.url.path(currentPage[1], currentPage[0]), {
        headers: gitHeaders
    })
        .then((response) => response.data)
}
