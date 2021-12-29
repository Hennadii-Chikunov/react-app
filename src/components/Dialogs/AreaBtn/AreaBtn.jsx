import React from "react";
import styles from './AreaBtn.module.scss';

const AreaBtn = (props) => {
    return (
        <button className={styles.btn}>
            {props.textBtn}
        </button>
    )
}

export {AreaBtn};