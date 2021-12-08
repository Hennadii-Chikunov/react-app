import classes from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return (
          <section className={classes.profile}>
              Section
              <MyPosts/>
          </section>
    );
}

export { Profile };