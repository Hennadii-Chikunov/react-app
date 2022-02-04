import styles from "../Dialogs/Dialogs.module.scss";
import {Message} from "./Message";
import {DialogItem} from "./DialogItem";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let messagesElements = state.messagesData.map(message =>
        <Message message={message.message}
                 key={message.id}/>);
    let dialogsElements = state.dialogsData.map(dialog =>
        <DialogItem name={dialog.name} key={dialog.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <section className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                                <textarea value={newMessageBody} onChange={onNewMessageChange}
                                          placeholder='Enter your message'
                                          name="" id=""
                                          cols="30"
                                          rows="10">
                                </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export {Dialogs};