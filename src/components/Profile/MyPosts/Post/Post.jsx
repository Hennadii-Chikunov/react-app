import image from './../../../../img/ava-user.jpg';
import styles from "./Post.module.scss";
import React from "react";
const Post = (props) => {

    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }
    return (
          <div className={styles.item}>
              <picture>
                  <img src={ image } alt="image"/>
              </picture>
              { props.message }
              <button type='button' className={styles.like}>Like</button> { props.likes }
              <div>
                  <textarea className={styles.areaText} ref={newPostElement} cols="20" rows="1"/>
                  <button className={styles.btn} onClick={addPost}>Click me</button>
              </div>
          </div>
    );
}

export { Post };