import classes from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return (
          <section className={classes.profile}>
               Страничка  Соц сети
              <MyPosts/>
          </section>
    );
}

export { Profile };