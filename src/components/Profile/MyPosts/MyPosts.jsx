import styles from "./MyPosts.module.scss";
/*import { Button } from "../../Button";*/
import {Post} from "./Post";
import React from "react";
import {addPostActionCreator, UpdateNewPostTextActionCreator} from "./../../../Redux/Reducers/profile-reducer";

const MyPosts = (props) => {
    // метод array.map
    let postElements =
        props.postsData.map(p => (
            <Post message={p.message} likes={p.likesCount} key={p.id}/>
        ));

    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(UpdateNewPostTextActionCreator(text));
    }
    return (
        <article>
            <h3 className={styles.title}>Клик по кнопке AddPost добавляет new POST на страницу(удаляется через reload
                page)</h3>
            <textarea onChange={onPostChange} ref={newPostElement} className={styles.textarea} value={props.newPostText}
                      cols="30" rows="2">
              </textarea>
            <button className={styles.btn} onClick={addPost}>Add post</button>
            {postElements}
        </article>
    );
}

export {MyPosts};