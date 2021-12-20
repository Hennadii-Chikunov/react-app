import styles from "./MyPosts.module.scss";
/*import { Button } from "../../Button";*/
import { Post } from "./Post";
import React from "react";
const MyPosts = (props) => {
        // метод array.map
     let postElements =
         props.postsData.map( p =>  (
             <Post message={p.message} likes={p.likesCount} key={p.id}/>
         ));

    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }
    return (
          <article>
              <textarea ref={newPostElement}  className={styles.textarea} name="" id="" cols="30" rows="10">
              </textarea>
             <button onClick={addPost}>Add post</button>
              { postElements }
          </article>
    );
}

export { MyPosts };