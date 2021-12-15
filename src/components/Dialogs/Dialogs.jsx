import classes from "./Dialogs.module.scss";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={classes.item}>
            <NavLink to={ path }>{props.name}</NavLink>
            </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}



const Dialogs = () => {

    let dialogs = [
        {id:1, name: 'Gera'},
        {id:2, name: 'Volt'},
        {id:3, name: 'Ell'},
        {id:4, name: 'Kit'},
        {id:5, name: 'Fill'}
    ]

    let messages = [
        {id:1, message: 'Hi, Gera'},
        {id:2, message: "What's up"},
        {id:3, message: "Good, i crazy love strawberry"}
    ]

    let dialogsElements = dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
    let messagesElements = messages.map( message => <Message message={message.message} /> );
    return (
        <section className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                { messagesElements }
            </div>
        </section>
    );
}
export { Dialogs };