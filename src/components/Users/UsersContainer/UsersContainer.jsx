import {connect} from "react-redux";
import {
    follow, getUsers, setCurrentPage, setUsers,
    setUsersTotalCount, toggleFollowingProgress, toggleIsFetching, unfollow
}
    from "../../../Redux/Reducers/users-reducer";
import React from "react";
import {Users} from "../Users";
import {Preloader} from "../../common/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber, this.props.pageSize);
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

UsersContainer = connect(mapStateToProps,
    {
        follow, unfollow, setUsers,
        setCurrentPage, setUsersTotalCount, toggleIsFetching,
        toggleFollowingProgress, getUsers
    }
)(UsersContainer);
export {UsersContainer}
