import styles from "./MyPosts.module.scss";
import {Post} from "./Post";
import React from "react";

const MyPosts = (props) => {
    // метод array.map
    let postElements =
        props.postsData.map(p => (
            <Post message={p.message} likes={p.likesCount} key={p.id}/>
        ));

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <article>
            <h3 className={styles.title}>
                Клик по кнопке AddPost
                добавляет new POST на страницу
                (удаляется через reload page)
            </h3>
            <textarea onChange={onPostChange} ref={newPostElement}
                      className={styles.textarea} value={props.newPostText}>
              </textarea>
            <button className={styles.btn} onClick={onAddPost}>Add post</button>
            {postElements}
        </article>
    );
}

export {MyPosts};