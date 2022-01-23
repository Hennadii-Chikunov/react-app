import React from 'react';
import "./App.scss";
import {Header} from "../Header";
import {Sidebar} from "../Sidebar";
import {Footer} from "../Footer";
import {DialogsContainer} from "../Dialogs/DialogsContainer";
import {
    Route
} from "react-router-dom";
import {UsersContainer} from "./../Users/UsersContainer/UsersContainer";
import ProfileContainer from './../Profile/ProfileContainer/ProfileContainer';


const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <Sidebar/>
            <div className='wrapper__content'>
                <Route exact path="/profile/:userId?" component={ProfileContainer}/>
                <Route exact path="/dialogs" component={DialogsContainer}/>
                <Route exact path='/users' component={UsersContainer}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
