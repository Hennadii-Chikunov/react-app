import classes from "./Button.module.scss";

const Button = (props) => {
    const {text = ''} = props;
    return (
        <button className={classes.btn}>{text}</button>
    );
}
export { Button };