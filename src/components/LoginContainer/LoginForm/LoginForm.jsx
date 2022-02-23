import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Utils/Validators/Validators";
import {ElementForm} from "../../../hoc/ElementForm";
import styles from '../Login.module.scss';

const maxLength = maxLengthCreator(30);
const Input = ElementForm("input");
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.flex}>
            <fieldset>
                <legend>Login Form</legend>
                <div className={styles.wrap__input}>
                    <Field name={'email'} className={styles.input}
                           placeholder={'email'} component={Input}
                           validate={[required, maxLength]}
                    />
                </div>
                <div className={styles.wrap__input}>
                    <Field name={'password'} className={styles.input}
                           placeholder={'Password'} component={Input}
                           type={'password'}
                           validate={[required, maxLength]}
                    />
                </div>
                <div>
                    <label>
                        <Field name={'rememberMe'} component={Input}
                               type={"checkbox"}
                        />
                        Remember me</label>
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