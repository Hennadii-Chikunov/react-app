import styles from './AvatarIcon.module.scss';
import avatar from './../../../../img/avatar.jpg';

const AvatarIcon = (props) => {
    return (
                          <figure>
                              <img className={styles.avatar} src={ avatar } alt="Avatar"/>
                              <figcaption>{props.name}</figcaption>
                          </figure>
        );
}

export { AvatarIcon };