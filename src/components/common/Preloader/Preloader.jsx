import preloader from '../../../img/preloaders.gif';
import styles from './Preloader.module.scss';

const Preloader = () => {
    return (
        <div>
            <img className={styles.preloader} src={preloader} alt="preloader"/>
        </div>
    )
}
export {Preloader};