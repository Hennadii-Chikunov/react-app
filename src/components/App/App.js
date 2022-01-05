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
const App = (props) => {
    return (
        <div className="wrapper">
            <Header/>
            <Sidebar state={props.state.sidebarPage}/>
            <div className='wrapper__content'>
                <Routes>
                    <Route exact path="/profile" element={
                        <Profile store={props.store}/>
                    }/>
                    <Route exact path="/dialogs" element={<DialogsContainer
                        store={props.store}/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
