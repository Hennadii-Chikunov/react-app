import React from 'react';
import ReactDOM from 'react-dom';
import {state} from "./Redux";
import './index.css';
import App from './components/App/App';
import {BrowserRouter} from "react-router-dom";
import {addPost, subscribe, updateNewPostText} from "./Redux/state";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
