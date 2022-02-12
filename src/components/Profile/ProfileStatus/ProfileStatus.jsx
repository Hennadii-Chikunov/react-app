import React from "react";
import styles from './ProfileStatus.module.scss';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({editMode: true})
    }

    deactivateEditMode() {
        this.setState({editMode: false})
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onClick={this.activateEditMode.bind(this)}
                              className={styles.status}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div className={styles.status}>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export {ProfileStatus};