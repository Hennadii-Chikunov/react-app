import classes from './Sidebar.module.scss';
import { NavLink } from "react-router-dom";
//console.log(classes);
const Sidebar = () => {
    return (
           <aside>
               <nav className={classes.nav}>
                   <ul>
                       <li className={classes.item}>
                           <NavLink to='/profile'>Profile</NavLink>
                       </li>
                       <li className={classes.item}>
                           <NavLink to='/dialogs'>Dialogs</NavLink>
                       </li>
                       <li className={classes.item}>SAAS</li>
                       <li className={classes.item}>HTML5</li>
                   </ul>
               </nav>
           </aside>
        );
}

export { Sidebar };