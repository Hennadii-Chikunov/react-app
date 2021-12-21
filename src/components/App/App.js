import React from 'react';
import "./App.scss";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import { Profile } from "../Profile/Profile";
import { Footer } from "../Footer/Footer";
import { Dialogs } from "../Dialogs";
import {
    Routes,
    Route
} from "react-router-dom";
import {updateNewPostText} from "../../Redux/state";

const App = (props) => {

   return (
               <div className="wrapper">
                   <Header />
                   <Sidebar state={props.state.sidebarPage}/>
                   <div className='wrapper__content'>
						 <Routes>
			                  <Route exact path="/profile" element={
                                  <Profile profilePage={props.state.profilePage}
                                           addPost={props.addPost}
                                           updateNewPostText={props.updateNewPostText}
                                  />} />
                               <Route exact path="/dialogs" element={<Dialogs
                                   state={props.state.dialogsPage}/>} />
                         </Routes>
                   </div>
                   <Footer />
               </div>
   );
}

export default App;
