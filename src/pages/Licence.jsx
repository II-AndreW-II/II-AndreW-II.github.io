import styles from '../styles/App.module.scss'
import {Header} from '../components/Header.jsx'

export function Licence(){
    return (
        <div className={styles.licence__wrapper}>
            <Header/>
            <h1 className={styles.title}>Лицензия для конвертера</h1>
            <p className={styles.desc}>
                Использование Программное обеспечение предоставляется для личного или коммерческого использования.

                Ограничения Запрещены модификация, декомпиляция и передача третьим лицам без разрешения.

                Ответственность Программное обеспечение предоставляется "как есть", без гарантий. Лицензиар не несет ответственности за ущерб, связанный с его использованием.

                Срок действия</p>
        </div>
    )
}