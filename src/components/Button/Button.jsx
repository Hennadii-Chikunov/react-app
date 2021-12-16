import styles from "./Button.module.scss";

const Button = (props) => {
    return (
        <button className={styles.btn}>{ props.text }</button>
    );
}
export { Button };