import {FriendsBlock} from "./FriendsBlock";
import {SideNav} from "./SideNav";
import React from "react";

const Sidebar = (props) => {

    return (
           <aside>
                  <SideNav />
                  <FriendsBlock sideFriendsData={props.state.sideFriendsData}/>
           </aside>
        );
}

export { Sidebar };