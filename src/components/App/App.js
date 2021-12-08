import React from 'react';
import "./App.scss";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import { Profile } from "../Profile/Profile";
import { Footer } from "../Footer/Footer";

const App = () => {
   return (
           <div className="wrapper">
                   <Header />
                   <Sidebar />
                   <Profile />
                   <Footer />
           </div>
   );
}

export default App;
