import styles from './Message.module.scss';

const Message = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.text}>{props.message}</div>
        </div>
    )
}

export {Message};