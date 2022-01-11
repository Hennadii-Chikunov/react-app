import {combineReducers, createStore} from "redux";
import profileReducer from "./Reducers/profile-reducer";
import dialogsReducer from "./Reducers/dialogs-reducer";
import sidebarReducer from "./Reducers/sidebar-reducer";
import usersReducer from './Reducers/users-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;

export {store};