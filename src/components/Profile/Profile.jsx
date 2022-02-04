import styles from "./Profile.module.scss";
import {ProfileInfo} from "./ProfileInfo";
import {MyPostsContainer} from "./MyPostsContainer";
import {Redirect} from "react-router-dom";

const Profile = (props) => {
    if (!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <section>
            <h2 className={styles.title}>Page of my start REACT project</h2>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </section>
    );
}

export {Profile};