import React from 'react';
import "./App.scss";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import { Profile } from "../Profile/Profile";
import { Footer } from "../Footer/Footer";
import { Dialogs } from "../Dialogs";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

const App = (props) => {

   return (
      <BrowserRouter>
               <div className="wrapper">
                   <Header />
                   <Sidebar />
                   <div className='wrapper__content'>
						 <Routes>
			                  <Route exact path="/profile" element={<Profile postsData={props.postsData}/>} />
                               <Route exact path="/dialogs" element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>} />
                         </Routes>
                   </div>
                   <Footer />
               </div>
      </BrowserRouter>
   );
}

export default App;
