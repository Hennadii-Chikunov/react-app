import React from 'react';
import "./App.scss";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import { Profile } from "../Profile/Profile";
import { Footer } from "../Footer/Footer";
import { Dialogs } from "../Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
   return (
       <BrowserRouter>
               <div className="wrapper">
                   <Header />
                   <Sidebar />
                   <div className='wrapper__content'>
                         <Route path='/profile' component={Profile}/>
                         <Route path='/dialogs' component={Dialogs}/>
                   </div>
                   <Footer />
               </div>
       </BrowserRouter>
   );
}

export default App;
