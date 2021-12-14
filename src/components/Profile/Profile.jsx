import classes from "./Profile.module.scss";
import { MyPosts } from "./MyPosts";
import {ProfileInfo} from "./ProfileInfo";

const Profile = () => {
    return (
          <section>
              <h2 className={classes.title}>Page of my start REACT project</h2>
              <ProfileInfo/>
              <MyPosts/>
          </section>
    );
}

export { Profile };