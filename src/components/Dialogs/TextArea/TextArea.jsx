import styles from './TextArea.module.scss';

const TextArea = () => {
    return (
        <textarea className={styles.area} cols="20" rows="3">
        </textarea>
    )
}

export {TextArea};