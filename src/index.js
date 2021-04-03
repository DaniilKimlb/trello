import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from "react-redux";
import store from "./redux/redux";
import {persistStore} from "redux-persist";

console.log(store().store)
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store().store}>
            <PersistGate loading={null} persistor={store().persistor}>
                <App/>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
