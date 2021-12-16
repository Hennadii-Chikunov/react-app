import styles from "./MyPosts.module.scss";
import { Button } from "../../Button";
import { Post } from "./Post";
const MyPosts = (props) => {

        // метод array.map
     let postElements =
         props.postsData.map( p =>  <Post message={p.message} likes={p.likesCount}/>);
    return (
          <article>
              <textarea className={styles.textarea} name="" id="" cols="30" rows="10">
              </textarea>
              <Button text="Click me"/>
              { postElements }
          </article>
    );
}

export { MyPosts };