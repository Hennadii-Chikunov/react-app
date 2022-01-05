import styles from "./Profile.module.scss";
import {ProfileInfo} from "./ProfileInfo";
import {MyPostsContainer} from "./MyPostsContainer";

const Profile = (props) => {
    return (
        <section>
            <h2 className={styles.title}>Page of my start REACT project</h2>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </section>
    );
}

export {Profile};