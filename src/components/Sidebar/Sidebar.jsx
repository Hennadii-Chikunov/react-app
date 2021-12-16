import styles from './Sidebar.module.scss';
import { NavLink } from "react-router-dom";
//console.log(classes);
const Sidebar = () => {
    return (
           <aside>
               <nav className={styles.nav}>
                   <ul>
                       <li className={styles.item}>
                           <NavLink to='/profile'>Profile</NavLink>
                       </li>
                       <li className={styles.item}>
                           <NavLink to='/dialogs'>Dialogs</NavLink>
                       </li>
                       <li className={styles.item}>SAAS</li>
                       <li className={styles.item}>HTML5</li>
                   </ul>
               </nav>
           </aside>
        );
}

export { Sidebar };