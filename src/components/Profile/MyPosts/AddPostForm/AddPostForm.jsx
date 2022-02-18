import styles from "../MyPosts.module.scss";
import React from "react";
import {Field, reduxForm} from "redux-form";

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'newPostText'}/>
            <button className={styles.btn}>Add post</button>
        </form>
    )
}
export const AddPostReduxForm = reduxForm({form: 'profileAddPostForm'})(AddPostForm)
export {AddPostForm};