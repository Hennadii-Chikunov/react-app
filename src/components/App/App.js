import React from 'react';
import "./App.scss";
import {Sidebar} from "../Sidebar";
import {Footer} from "../Footer";
import DialogsContainer from "../Dialogs/DialogsContainer";
import {
    Route
} from "react-router-dom";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from './../Profile/ProfileContainer/ProfileContainer';
import HeaderContainer from "./../Header/HeaderContainer";
import {Login} from "../Login";


const App = () => {
    return (
        <div className="wrapper">
            <HeaderContainer/>
            <Sidebar/>
            <div className='wrapper__content'>
                <Route exact path="/profile/:userId?" component={ProfileContainer}/>
                <Route exact path="/dialogs" component={DialogsContainer}/>
                <Route exact path='/users' component={UsersContainer}/>
                <Route exact path='/login' component={Login}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
