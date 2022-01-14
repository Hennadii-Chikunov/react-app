import {UsersClass} from "../UsersClass";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC}
    from "../../../Redux/Reducers/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);

export {UsersContainer};