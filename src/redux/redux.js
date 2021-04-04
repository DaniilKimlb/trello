import {compose, createStore} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import boardReducer from "./BoardReducer";

const persistConfig = {
    key: 'trello',
    storage,
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistConfig, boardReducer)
export default () => {
    let store = createStore(persistedReducer, composeEnhancers())
    let persistor = persistStore(store)
    return {store, persistor}
}
