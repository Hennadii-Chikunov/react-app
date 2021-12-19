import styles from './FriendsBlock.module.scss';
import {AvatarIcon} from "./AvatarIcon";

const FriendsBlock = (props) => {
    let friendsElements =
        props.sideFriendsData.map( nav =>  <AvatarIcon name={nav.name} />);
    return (
                   <div className={styles.friends}>
                       { friendsElements }
                   </div>
        );
}

export { FriendsBlock };