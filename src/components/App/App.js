import React from 'react';
import "./App.scss";
import {Header} from "../Header";
import {Sidebar} from "../Sidebar";
import {Footer} from "../Footer";
import {DialogsContainer} from "../Dialogs/DialogsContainer";
import {
    Routes,
    Route
} from "react-router-dom";
import {UsersContainer} from "../Users/UsersContainer/UsersContainer";
import ProfileContainer from './../Profile/ProfileContainer/ProfileContainer';


const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <Sidebar/>
            <div className='wrapper__content'>
                <Routes>
                    <Route exact path="/profile" element={
                        <ProfileContainer/>
                    }/>
                    <Route exact path="/dialogs" element={<DialogsContainer/>}/>
                    <Route exact path='/users' element={<UsersContainer/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
