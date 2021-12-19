import styles from './SideNav.module.scss';
import { NavLink } from "react-router-dom";

const SideNav = (props) => {

    return (
                   <nav className={styles.nav}>
                       <ul>
                           <li className={styles.item}>
                               <NavLink to='/profile'>
                                  Profile
                               </NavLink>
                           </li>
                           <li className={styles.item}>
                               <NavLink to='/dialogs'>
                                   Dialogs
                               </NavLink>
                           </li>
                           <li className={styles.item}>
                               <NavLink to='/catalog'>
                                  Catalog
                               </NavLink>
                           </li>
                           <li className={styles.item}>
                               <NavLink to='/settings'>
                                  Settings
                               </NavLink>
                           </li>
                       </ul>
                   </nav>
        );
}

export { SideNav };