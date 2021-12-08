import image from '../../../../img/shield.jpg';
import classes from "./Post.module.scss";

const Post = () => {
    return (
          <div className={classes.item}>
              <img src={ image } alt=""/>
              Post 1
          </div>
    );
}

export { Post };