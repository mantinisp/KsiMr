import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import { mergeRequests } from "../reducers/mergeRequests";
import apiSaga from "../sagas/api-saga";
import createSagaMiddleware from "redux-saga";

const initialiseSagaMiddleware = createSagaMiddleware();
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers(
        {
            mergeRequests
        }
    ),
    storeEnhancers(
        applyMiddleware(initialiseSagaMiddleware)
    )
);
initialiseSagaMiddleware.run(apiSaga);
export default store;
