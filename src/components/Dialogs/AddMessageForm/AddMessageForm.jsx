import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Utils/Validators/Validators";
import {ElementForm} from "../../../hoc/ElementForm";

const maxLength = maxLengthCreator(20);
const Textarea = ElementForm("textarea");
const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength]}
                       name={'newMessageBody'}
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