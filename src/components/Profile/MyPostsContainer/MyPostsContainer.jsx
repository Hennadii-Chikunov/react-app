import React from "react";
import {MyPosts} from "../MyPosts";
import {addPostActionCreator, UpdateNewPostTextActionCreator}
    from "../../../Redux/Reducers/profile-reducer";

const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    let onPostChange = (text) => {
        let action = UpdateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }
    return (<MyPosts updateNewPostText={onPostChange} addPost={addPost}
                     postsData={state.profilePage.postsData}
                     newPostText={state.profilePage.newPostText}/>)
}

export {MyPostsContainer};