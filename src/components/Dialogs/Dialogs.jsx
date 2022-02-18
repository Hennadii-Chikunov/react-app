import styles from "../Dialogs/Dialogs.module.scss";
import {Message} from "./Message";
import {DialogItem} from "./DialogItem";
import {Redirect} from "react-router-dom";
import {AddMessageReduxForm} from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let messagesElements = state.messagesData.map(message =>
        <Message message={message.message}
                 key={message.id}/>);
    let dialogsElements = state.dialogsData.map(dialog =>
        <DialogItem name={dialog.name} key={dialog.id}/>);
    if (!props.isAuth) return <Redirect to={'/login'}/>
    
    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }
    return (
        <section className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div>{messagesElements}</div>
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </section>
    )
}

export {Dialogs};