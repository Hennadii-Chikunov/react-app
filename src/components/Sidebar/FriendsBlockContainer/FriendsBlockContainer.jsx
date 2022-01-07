import {FriendsBlock} from "../FriendsBlock";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        sidebarPage: state.sidebarPage
    }
}

const FriendsBlockContainer = connect(mapStateToProps)(FriendsBlock);

export {FriendsBlockContainer};