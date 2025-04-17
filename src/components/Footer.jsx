import styles from '../styles/components.module.scss'
import {Link} from "react-router-dom";


export function Footer(){
    return (
        <>
            <div className={styles.footer}>
                <Link className={styles.linkReset} to='/licence'>
                Лицензия(произвольная)
                </Link>
            </div>
        </>
    )
}