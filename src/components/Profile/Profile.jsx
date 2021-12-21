import styles from "./Profile.module.scss";
import { MyPosts } from "./MyPosts";
import {ProfileInfo} from "./ProfileInfo";

const Profile = (props) => {
    return (
          <section>
              <h2 className={styles.title}>Page of my start REACT project</h2>
              <ProfileInfo/>
              <MyPosts postsData={props.profilePage.postsData}
                       newPostText={props.profilePage.newPostText}
                       updateNewPostText={props.updateNewPostText}
                       addPost={props.addPost}/>
          </section>
    );
}

export { Profile };