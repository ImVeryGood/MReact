import { applyMiddleware, createStore } from "redux";
import appReducer from "../reducer/AllReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../../saga/MSaga";
import { totalState } from "../state";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(appReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;
