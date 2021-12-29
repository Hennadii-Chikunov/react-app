import styles from "./Dialogs.module.scss";

import React from "react";

import {Message} from "./Message";
import {DialogItem} from "./DialogItem";
import {AreaBtn} from "./AreaBtn";
import {TextArea} from "./TextArea";

const Dialogs = (props) => {

    let messagesElements = props.state.messagesData.map(message => <Message message={message.message}
                                                                            key={message.id}/>);
    let AreaElements = props.state.textBtnData.map(area => <TextArea key={area.id}/>);
    let BtnAreaElements = props.state.textBtnData.map(btn => <AreaBtn textBtn={btn.textBtn} key={btn.id}/>);
    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id}/>);
    return (
        <section className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
            <div className={styles.area}>
                {AreaElements}
            </div>
            <div className={styles.btn}>
                {BtnAreaElements}
            </div>
        </section>
    );
}
export {Dialogs};