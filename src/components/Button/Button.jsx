import classes from "./Button.module.scss";

const Button = (props) => {
    return (
        <button className={classes.btn}>{ props.text }</button>
    );
}
export { Button };