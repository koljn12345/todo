import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import headerTableReducer from "./headerTableReducer";
import listReducer from "./listReducer"
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import setingReducer from "./setingReducer";

let reducers = combineReducers({
    headerTable: headerTableReducer,
    list: listReducer,
    seting: setingReducer,
    form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;