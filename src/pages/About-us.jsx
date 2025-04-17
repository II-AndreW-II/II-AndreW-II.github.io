import styles from '../styles/App.module.scss'
import {Header} from '../components/Header.jsx'
import {Footer} from '../components/Footer.jsx'

export function AboutUs(){
    return (
        <>
            <div className={styles.aboutUs}>
                <Header/>
                <div className={styles.wrapper}>
                <h1 className={styles.title}> ИПР. Вариант 3</h1>
                <p className={styles.desc}>Создать онлайн-конвертер валют с загрузкой текущих курсов через API. </p>
                </div>
            </div>
            <Footer/>
        </>
    )
}