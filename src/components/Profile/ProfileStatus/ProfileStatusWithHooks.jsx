import React, {useState} from "react";
import styles from './ProfileStatus.module.scss';

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    const activatedEditMode = () => {
        setEditMode(true);
    }
    const deactivatedEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
    return (
        <div>
            {!editMode &&
                <div>
                    <button onClick={activatedEditMode}
                            className={styles.status}>
                        {props.status || "Введи Статус My Friend..."}
                    </button>
                </div>
            }
            {editMode &&
                <div className={styles.status}>
                    <input onChange={onStatusChange}
                           autoFocus={true}
                           onBlur={deactivatedEditMode}
                           value={status}
                    />
                </div>
            }
        </div>
    )
}

export {ProfileStatusWithHooks};