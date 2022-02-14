import React from "react";
import styles from './ProfileStatus.module.scss';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    EditMode = () => {
        this.setState({editMode: !this.state.editMode})
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onClick={this.EditMode}
                              className={styles.status}>{this.props.status || "Введите Статус..."}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div className={styles.status}>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.EditMode}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export {ProfileStatus};