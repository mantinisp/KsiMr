import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {mergeRequests} from "../reducers/mergeRequests";
import {projectList} from "../reducers/projectList";
import {userSettings} from "../reducers/userSettings";
import apiSaga from "../sagas/api-saga";
import createSagaMiddleware from "redux-saga";

const initialiseSagaMiddleware = createSagaMiddleware();
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
    key: 'pickedProjects',
    storage: storage,
    whitelist: ['pickedProjects']
};
const settingsConfig = {
    key: 'userToken',
    storage: storage,
    whitelist: ['userToken']
};
const pReducer = persistReducer(persistConfig, projectList);
const settingsPersist = persistReducer(settingsConfig, userSettings);
const store = createStore(
    combineReducers(
        {
            userSettings: settingsPersist,
            projectList,
            myProjects: pReducer,
            mergeRequests
        }
    ),
    storeEnhancers(
        applyMiddleware(initialiseSagaMiddleware)
    )
);
initialiseSagaMiddleware.run(apiSaga);
export const persistor = persistStore(store);
export default store;
