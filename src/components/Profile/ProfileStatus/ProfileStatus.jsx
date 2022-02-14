import React from "react";
import styles from './ProfileStatus.module.scss';


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    EditMode = () => {
        this.setState({editMode: !this.state.editMode})
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onClick={this.EditMode}
                              className={styles.status}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div className={styles.status}>
                        <input autoFocus={true} onBlur={this.EditMode} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export {ProfileStatus};