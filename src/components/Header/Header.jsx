import logo from '../../img/logo.jpg';
import styles from './Header.module.scss';
import {NavLink} from "react-router-dom";

const Header = (props) => (
    <header className={styles.header}>
        <img className={styles.logo} src={logo} alt={"logo"}/>
        <div className={styles.login}>
            {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
);

export {Header};