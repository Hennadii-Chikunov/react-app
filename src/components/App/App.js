import React from 'react';
import "./App.scss";
import {Header} from "../Header";
import {Sidebar} from "../Sidebar";
import {Profile} from "../Profile";
import {Footer} from "../Footer";
import {DialogsContainer} from "../Dialogs/DialogsContainer";
import {
    Routes,
    Route
} from "react-router-dom";
// props это обьект который передает какие то данные !!!
const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <Sidebar/>
            <div className='wrapper__content'>
                <Routes>
                    <Route exact path="/profile" element={
                        <Profile/>
                    }/>
                    <Route exact path="/dialogs" element={<DialogsContainer/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
