import styles from "./Dialogs.module.scss";

import React from "react";

import {Message} from "./Message";
import {DialogItem} from "./DialogItem";

const Dialogs = (props) => {

    let messagesElements = props.state.messagesData.map( message => <Message message={message.message} key={message.id}/> );
    let dialogsElements = props.state.dialogsData.map( dialog => <DialogItem name={dialog.name} key={dialog.id} /> );

    return (
        <section className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={styles.messages}>
                { messagesElements }
            </div>
        </section>
    );
}
export { Dialogs };