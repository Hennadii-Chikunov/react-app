import classes from './Sidebar.module.scss';
//console.log(classes);
const Sidebar = () => {
    return (
            <nav className={classes.nav}>
                <ul>
                    <li className={`${classes.item} ${classes.active}`}>
                        <a href="/profile">Profile</a>
                    </li>
                    <li className={classes.item}>
                        <a href="/dialogs">Messages</a>
                    </li>
                    <li className={classes.item}>SAAS</li>
                    <li className={classes.item}>HTML5</li>
                </ul>
            </nav>
        );
}

export { Sidebar };