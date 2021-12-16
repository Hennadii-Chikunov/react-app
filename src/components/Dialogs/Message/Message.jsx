import styles from "./../Dialogs.module.scss";

const Message = (props) => {
    return (
        <div className={styles.message}>{props.message}</div>
    )
}

export { Message };