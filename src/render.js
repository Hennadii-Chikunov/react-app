import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {BrowserRouter} from "react-router-dom";
import { addPost } from "./Redux/state";

export  let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

