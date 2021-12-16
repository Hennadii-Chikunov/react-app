import styles from "./ProfileInfo.module.scss";
import image from "../../../img/scene-two.jpg";
const ProfileInfo = () => {
    return (
        <div>
            <picture>
                <img className={styles.img} src={ image } alt="image"/>
            </picture>
        </div>
    );
}

export { ProfileInfo };