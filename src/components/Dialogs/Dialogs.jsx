import styles from "../Dialogs/Dialogs.module.scss";
import {Message} from "./Message";
import {DialogItem} from "./DialogItem";
import {Redirect} from "react-router-dom";
import {AddMessageReduxForm} from "./AddMessageForm/AddMessageForm";
import React, {useState} from 'react';

const Dialogs = (props) => {
    const [count, setCount] = useState(0);
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
            <p>Вы кликнули на банан {count} раз(а)</p>
            <button onClick={() => setCount(count + 1)}>
                Нажми на меня Дружище
            </button>
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