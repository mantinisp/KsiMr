import {takeEvery, call, put, take, all, takeLatest, select} from "redux-saga/effects";
import {
    gitlabEndpoint,
    gitHeaders,
    endpoints
} from "../../core/endpoints/endpoints";
import {
    DATA_REQUEST,
    DATA_LOAD,
    API_ERROR,
    REFRESH_PROJECTS,
    DATA_REQUEST_MERGES,
    DATA_LOAD_MERGES
} from "../constants/action-types";
import store from "../store";
import {newMergeList} from "../actions/mergeRequestsAction";
import axios from "axios";
import {forEach} from "react-bootstrap/cjs/ElementChildren";

export const currentPage = (state) => state.projectList.page;
export const numberPerPages = (state) => state.projectList.perPage;
export const projectsId = (state) => state.myProjects.pickedProjects;

export default function* watcherSaga() {
    yield takeEvery(DATA_REQUEST, workerSagaProjects);
    yield takeLatest(REFRESH_PROJECTS, workerSagaProjects);
    yield takeEvery(DATA_REQUEST_MERGES, workerSagaMerges);
}

function* workerSagaProjects() {
    try {
        const currPage = yield select(currentPage);
        const perPage = yield select(numberPerPages);
        const payload = yield call(getProjectList, [currPage, perPage]);
        yield put({type: DATA_LOAD, payload})
    } catch (e) {
        yield put({type: API_ERROR, payload: e})
    }
}

function* workerSagaMerges() {
    try {
        const projects = yield select(projectsId);
        const payload = yield call(getMergesList, projects);
        yield put({type: DATA_LOAD_MERGES, payload})
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

function getMergesList(projects) {
    var mergesData = [];
    projects.forEach((element, index) => {
        mergesData = asyncMerges((element.id));
    });
}

async function asyncMerges(projectId) {
    const response = await axios.get(gitlabEndpoint + endpoints.GET_MERGE_REQUEST.url.path(projectId), {
        headers: gitHeaders
    });
    const dataResult = await response.data;
    return store.dispatch(newMergeList(dataResult));
}

