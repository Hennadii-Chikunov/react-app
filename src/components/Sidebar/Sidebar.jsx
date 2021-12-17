import styles from './Sidebar.module.scss';
import { NavLink } from "react-router-dom";
import avatar from './../../img/avatar.jpg';

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
                   <div className={styles.friends}>
                          <figure>
                              <img className={styles.avatar} src={ avatar } alt="Avatar"/>
                              <figcaption>Gera</figcaption>
                          </figure>
                       <figure>
                           <img className={styles.avatar} src={ avatar } alt="Avatar"/>
                           <figcaption>Volt</figcaption>
                       </figure>
                       <figure>
                           <img className={styles.avatar} src={ avatar } alt="Avatar"/>
                           <figcaption>Ell</figcaption>
                       </figure>
                   </div>
           </aside>
        );
}

export { Sidebar };