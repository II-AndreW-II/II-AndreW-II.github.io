import styles from '../styles/App.module.scss'
import {Header} from '../components/Header.jsx'
import {Footer} from '../components/Footer.jsx'





export function Home(){
    return (
        <>
            <Header/>
            <div className={styles.home__wrapper}>
                <h1 className={styles.title1}> Online </h1>
                <h1 className={styles.title2}> converter </h1>
            </div>
            <Footer/>
        </>
    )
}