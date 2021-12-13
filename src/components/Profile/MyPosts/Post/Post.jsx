import image from '../../../../img/shield.jpg';
import classes from "./Post.module.scss";

const Post = (props) => {

    return (
          <div className={classes.item}>
              <picture>
                  <img src={ image } alt="image"/>
              </picture>
              { props.message }
              <span>Like</span> { props.likes }
          </div>
    );
}

export { Post };