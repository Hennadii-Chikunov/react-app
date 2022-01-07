import styles from "./FriendsBlock.module.scss";
import {AvatarIcon} from "./AvatarIcon";

const FriendsBlock = (props) => {
    let state = props.sidebarPage;
    let friendsElements =
        state.sideFriendsData.map(nav =>
            <AvatarIcon name={nav.name} key={nav.id}/>);
    return (
        <div className={styles.friends}>
            {friendsElements}
        </div>
    )
}

export {FriendsBlock};