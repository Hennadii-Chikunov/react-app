import styles from "./ProfileInfo.module.scss";
import image from "../../../img/scene-two.jpg";
import {Preloader} from "../../common/Preloader";
import {ProfileStatusWithHooks} from "../ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <picture>
                <img className={styles.img} src={image} alt="image"/>
            </picture>
            <div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <h3>
                    {props.profile.aboutMe}
                </h3>
                <figure>
                    <img src={props.profile.photos.small} alt="profile"/>
                    <figcaption>{props.profile.lookingForAJobDescription}</figcaption>
                </figure>
                <div>
                    <span>{props.profile.contacts.facebook}</span>
                    <span>{props.profile.contacts.github}</span>
                    <span>{props.profile.contacts.instagram}</span>
                </div>
            </div>
        </div>
    );
}

export {ProfileInfo};