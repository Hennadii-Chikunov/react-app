import classes from "./ProfileInfo.module.scss";
import image from "../../../img/scene-two.jpg";
const ProfileInfo = () => {
    return (
        <div>
            <picture>
                <img className={classes.img} src={ image } alt="image"/>
            </picture>
        </div>
    );
}

export { ProfileInfo };