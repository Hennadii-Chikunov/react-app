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
    return (
        <section className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                    <DialogItem name='Герыч' id='Gera'/>
                    <DialogItem name='Элл' id='Ell'/>
                    <DialogItem name='Вольт' id='Volt'/>
                    <DialogItem name='Филин' id='Fill'/>
                    <DialogItem name='Никитос' id='Kit'/>
            </div>
            <div className={classes.messages}>
               <Message message='Hi, Gera'/>
                <Message message="What's up"/>
                <Message message="Good, i crazy love strawberry"/>
                <Message message='Yeah, I eat meat, I am not a vegetarian'/>
            </div>
        </section>
    );
}
export { Dialogs };