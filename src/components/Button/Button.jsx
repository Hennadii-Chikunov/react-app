import styles from "./Button.module.scss";
import React from "react";


const Button = (props) => {
    return (
        <button className={styles.btn}>{ props.text }</button>
    );
}
export { Button };