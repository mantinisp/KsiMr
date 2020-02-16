import {
    takeEvery,
    call,
    put,
    take,
    all,
    takeLatest,
    takeLeading,
    select,
    putResolve
} from "redux-saga/effects";
import {
    gitlabEndpoint,
    endpoints
} from "../../core/endpoints/endpoints";
import {
    DATA_REQUEST,
    DATA_LOAD,
    API_ERROR,
    REFRESH_PROJECTS,
    DATA_REQUEST_MERGES,
    DATA_LOAD_MERGES, GENERATE_LIST,
    NEW_MERGE_LIST,
    REFRESH_MERGES_LIST
} from "../constants/action-types";
import store from "../store";
import {generateList, newMergeList} from "../actions/mergeRequestsAction";
import axios from "axios";

export const currentPage = (state) => state.projectList.page;
export const numberPerPages = (state) => state.projectList.perPage;
export const projectsId = (state) => state.myProjects.pickedProjects;
export const projectsCounter = (state) => state.myProjects;
export const userToken = (state) => state.userSettings.userToken;

export default function* watcherSaga() {
    yield takeEvery(DATA_REQUEST, workerSagaProjects);
    yield takeLatest(REFRESH_PROJECTS, workerSagaProjects);
    yield takeEvery(DATA_REQUEST_MERGES, workerSagaMerges);
    yield takeLatest("persist/REHYDRATE", sagaMergeListGenerate);
    yield takeEvery(REFRESH_MERGES_LIST, sagaMergeListRefresh);
}

function* sagaMergeListGenerate() {
    const projects = yield select(projectsId);
    if (projects.length > 0) {
        for (let i = 0; i < projects.length; i++) {
            const action = yield take(NEW_MERGE_LIST);
        }
        yield put({type: GENERATE_LIST});
    }
}
function* sagaMergeListRefresh() {
    yield put({type: DATA_REQUEST_MERGES});
    const projects = yield select(projectsId);
    if (projects.length > 0) {
        for (let i = 0; i < projects.length; i++) {
            const action = yield take(NEW_MERGE_LIST);
        }
        yield put({type: GENERATE_LIST});
    }
}

function* workerSagaProjects() {
    try {
        const token =  yield select(userToken);
        const currPage = yield select(currentPage);
        const perPage = yield select(numberPerPages);
        const payload = yield call(getProjectList, { page: currPage, perPage: perPage, token: token});
        yield put({type: DATA_LOAD, payload})
    } catch (e) {
        yield put({type: API_ERROR, payload: e})
    }
}

function* workerSagaMerges() {
    try {
        const token =  yield select(userToken);
        const projects = yield select(projectsId);
        const payload = yield call(getMergesList, {project: projects, token: token});
        yield put({type: DATA_LOAD_MERGES, payload})
    } catch (e) {
        yield put({type: API_ERROR, payload: e})
    }
}

function* generateSagaMerges() {
    yield put({type: GENERATE_LIST})
}

function getProjectList(currentPage) {
    return axios.get(gitlabEndpoint + endpoints.GET_PROJECTS.url.path(currentPage.perPage, currentPage.page), {
        headers: gitHeader(currentPage.token)
    })
        .then((response) => response.data)
}

function getMergesList(projects) {
    var mergesData = [];
    projects.project.forEach((element, index) => {
        mergesData = asyncMerges((element.id), projects.token);
    });
}

async function asyncMerges(projectId, token) {
    const response = await axios.get(gitlabEndpoint + endpoints.GET_MERGE_REQUEST.url.path(projectId), {
        headers: gitHeader(token)
    });
    const dataResult = await response.data;
    return store.dispatch(newMergeList(dataResult));
}

export const gitHeader = (token) => {
    return {
        'Content-Type': 'application/json',
        'Private-Token': endpoints.GET_USER_TOKEN.token.getToken(token)
    }
};
