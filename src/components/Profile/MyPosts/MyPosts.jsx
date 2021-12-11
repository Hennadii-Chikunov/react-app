import classes from "./MyPosts.module.scss";
import { Button } from "../../Button";
import { Post } from "./Post";
const MyPosts = () => {
    return (
          <article>
              <textarea className={classes.textarea} name="" id="" cols="30" rows="10">
              </textarea>
              <Button text="Click me"/>
              <Post message='Hi, How are you ?' likes='1'/>
              <Post message='Good and You ?' likes='31'/>
          </article>
    );
}

export { MyPosts };