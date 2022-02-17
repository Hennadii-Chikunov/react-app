import styles from "../Login/Login.module.scss";
import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.flex}>
            <fieldset>
                <legend>Login Form</legend>
                <div className={styles.wrap__input}>
                    <Field name={'Login'} className={styles.input} placeholder={'Login'} component={'input'}/>
                </div>
                <div className={styles.wrap__input}>
                    <Field name={'Password'} className={styles.input} placeholder={'Password'} component={'input'}/>
                </div>
                <div>
                    <label><Field name={'rememberMe'} component={'input'} type={"checkbox"}/> Remember me</label>
                </div>
                <div>
                    <button type={'submit'}>Login</button>
                </div>
            </fieldset>
        </form>
    )
}
export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export {LoginForm};