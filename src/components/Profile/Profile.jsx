import classes from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return (
          <section className={classes.profile}>
               Страничка  Соц сети на React(е) 12347
              <MyPosts/>
          </section>
    );
}

export { Profile };