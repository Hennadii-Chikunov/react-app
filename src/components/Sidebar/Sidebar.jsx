import classes from './Sidebar.module.scss';
//console.log(classes);
const Sidebar = () => {
    return (
            <nav className={classes.nav}>
                <ul>
                    <li className={`${classes.item} ${classes.active}`}>React</li>
                    <li className={classes.item}>Js</li>
                    <li className={classes.item}>SAAS</li>
                    <li className={classes.item}>HTML5</li>
                </ul>
            </nav>
        );
}

export { Sidebar };