import classes from "./MyPosts.module.scss";
import { Button } from "../../Button";
import { Post } from "./Post";
const MyPosts = () => {
    // данные с сервера
    let postsData = [
        {id:1, message: 'Hi, How are you ?', likesCount: 18},
        {id:2, message: "Good and You ?", likesCount: 31},
        {id:3, message: "You are Best of the Best ?", likesCount: 1}
    ]
        // метод array.map
     let postElements =
         postsData.map( p =>  <Post message={p.message} likes={p.likesCount}/>);
    return (
          <article>
              <textarea className={classes.textarea} name="" id="" cols="30" rows="10">
              </textarea>
              <Button text="Click me"/>
              { postElements }
          </article>
    );
}

export { MyPosts };