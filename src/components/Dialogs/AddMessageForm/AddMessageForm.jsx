import {Field, reduxForm} from "redux-form";

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newMessageBody'}
                       placeholder='Enter your message'/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
export const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)
export {AddMessageForm};