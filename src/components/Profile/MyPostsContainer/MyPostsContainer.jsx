import React from "react";
import {MyPosts} from "../MyPosts";
import {addPostActionCreator, UpdateNewPostTextActionCreator}
    from "../../../Redux/Reducers/profile-reducer";
import {StoreContext} from "../../../StoreContext";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }
                let onPostChange = (text) => {
                    let action = UpdateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }
                return <MyPosts updateNewPostText={onPostChange}
                                addPost={addPost}
                                postsData={state.profilePage.postsData}
                                newPostText={state.profilePage.newPostText}/>
            }
            }
        </StoreContext.Consumer>
    )
}

export {MyPostsContainer};