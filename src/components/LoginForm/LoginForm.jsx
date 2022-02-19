import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../Utils/Validators/Validators";
import {ElementForm} from "../../hoc/ElementForm";
import styles from '../Login/Login.module.scss';

const maxLength = maxLengthCreator(10);
const Input = ElementForm("input");
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.flex}>
            <fieldset>
                <legend>Login Form</legend>
                <div className={styles.wrap__input}>
                    <Field name={'Login'} className={styles.input}
                           placeholder={'Login'} component={Input}
                           validate={[required, maxLength]}
                    />
                </div>
                <div className={styles.wrap__input}>
                    <Field name={'Password'} className={styles.input}
                           placeholder={'Password'} component={Input}
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