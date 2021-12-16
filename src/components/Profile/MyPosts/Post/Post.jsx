import image from '../../../../img/shield.jpg';
import styles from "./Post.module.scss";

const Post = (props) => {

    return (
          <div className={styles.item}>
              <picture>
                  <img src={ image } alt="image"/>
              </picture>
              { props.message }
              <span>Like</span> { props.likes }
          </div>
    );
}

export { Post };