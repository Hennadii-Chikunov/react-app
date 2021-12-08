import logo from '../../img/logo.jpg';
import classes from './Header.module.scss';

const Header = () => (
       <header className={classes.Header}>
           <img className={classes.logo} src={logo} alt={"logo"}/>
       </header>
    );

export { Header };