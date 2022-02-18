import styles from "./MyPosts.module.scss";
import {Post} from "./Post";
import React from "react";
import {AddPostReduxForm} from "./AddPostForm/AddPostForm";

const MyPosts = (props) => {
    let postElements =
        props.postsData.map(p => (
            <Post message={p.message} likes={p.likesCount} key={p.id}/>
        ));
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }
    return (
        <article>
            <h3 className={styles.title}>
                Клик по кнопке AddPost
                добавляет new POST на страницу
                (удаляется через reload page)
            </h3>
            <AddPostReduxForm onSubmit={onAddPost}/>
            {postElements}
        </article>
    );
}

export {MyPosts};