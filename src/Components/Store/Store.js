import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";

import reducer from "./Reducers.js";
import appState from './GlobalState.js';

const middleWare = applyMiddleware(logger);
const store = createStore(reducer, appState, middleWare)

export default store;
