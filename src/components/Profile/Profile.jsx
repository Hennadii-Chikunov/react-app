import styles from "./Profile.module.scss";
import {ProfileInfo} from "./ProfileInfo";
import {MyPostsContainer} from "./MyPostsContainer";

const Profile = (props) => {
    return (
        <section>
            <h2 className={styles.title}>Page of my start REACT project</h2>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
            />
            <MyPostsContainer/>
        </section>
    );
}

export {Profile};