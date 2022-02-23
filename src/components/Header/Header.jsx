import logo from '../../img/logo.jpg';
import styles from './Header.module.scss';

const Header = (props) => (
    <header className={styles.header}>
        <img className={styles.logo} src={logo} alt={"logo"}/>
        <div className={styles.login}>
            {
                props.isAuth
                    ? <div>{props.login}
                        <button onClick={props.logOut}>logOut</button>
                    </div>
                    : undefined
            }
        </div>
    </header>
);

export {Header};