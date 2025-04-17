import styles from '../styles/components.module.scss'
import {Link} from "react-router-dom";

export function Nav(){
    return(
        <>
            <div className={styles.nav}>
                <button className={styles.nav__button}>
                    <Link className={styles.linkReset} to='/'> Главная </Link>
                </button>
                <button className={styles.nav__button}>
                    <Link className={styles.linkReset} to='/converter'>Конвертре </Link>
                </button>
                <button className={styles.nav__button}>
                    <Link className={styles.linkReset} to='/about-us'>О работе  </Link>
                </button>
            </div>
        </>
    )
}
