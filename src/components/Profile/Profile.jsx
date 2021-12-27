import styles from "./Profile.module.scss";
import {MyPosts} from "./MyPosts";
import {ProfileInfo} from "./ProfileInfo";

const Profile = (props) => {
    return (
        <section>
            <h2 className={styles.title}>Page of my start REACT project</h2>
            <ProfileInfo/>
            <MyPosts postsData={props.profilePage.postsData}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
            />
        </section>
    );
}

export {Profile};