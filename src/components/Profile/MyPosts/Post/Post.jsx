import image from '../../../../img/shield.jpg';
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
              <span>Like</span> { props.likes }
              <div>
                  <textarea ref={newPostElement} cols="20" rows="1"></textarea>
                  <button onClick={addPost}>Click me</button>
              </div>
          </div>
    );
}

export { Post };