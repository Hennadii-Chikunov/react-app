import {SideNav} from "./SideNav";
import React from "react";
import {FriendsBlockContainer} from "./FriendsBlockContainer";

const Sidebar = (props) => {
    return (
        <aside>
            <SideNav/>
            <FriendsBlockContainer/>
        </aside>
    );
}

export {Sidebar};