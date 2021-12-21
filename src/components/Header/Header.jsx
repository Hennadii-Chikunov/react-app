import logo from '../../img/logo.jpg';
import styles from './Header.module.scss';

const Header = () => (
       <header className={styles.header}>
           <img className={styles.logo} src={logo} alt={"logo"}/>
       </header>
    );

export { Header };