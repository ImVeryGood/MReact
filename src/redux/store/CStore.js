import { createStore } from "redux";
import setCounter from "../reducer/CReducer";

const store = createStore(setCounter);
export default store;
