import React from 'react';
import ReactDOM from 'react-dom';
import {store} from './Redux/redux-store';
import './index.css';
import App from './components/App/App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
