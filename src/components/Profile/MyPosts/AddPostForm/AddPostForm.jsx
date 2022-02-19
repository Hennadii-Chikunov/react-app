import styles from "../MyPosts.module.scss";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../Utils/Validators/Validators";
import {ElementForm} from "../../../../hoc/ElementForm";

const maxLength = maxLengthCreator(15);
const Textarea = ElementForm("textarea");
const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field validate={[required, maxLength]}
                   component={Textarea} name={'newPostText'}
                   placeholder={'Post message'}
            />
            <button className={styles.btn}>Add post</button>
        </form>
    )
}
export const AddPostReduxForm = reduxForm({form: 'profileAddPostForm'})(AddPostForm)
export {AddPostForm};