import {combineReducers, compose, createStore} from "redux";
import boardReducer from "./BoardReducer";



const rootReducer = combineReducers({
    rootReducer: boardReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers())
export default store
