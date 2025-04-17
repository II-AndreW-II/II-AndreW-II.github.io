import React, {useState, useEffect} from "react"
import styles from '../styles/App.module.scss'
import {Header} from '../components/Header.jsx'
import {Footer} from '../components/Footer.jsx'
import axios from 'axios'

export function Converter(){
    const currencies = ['USD', 'EUR', 'RUB', 'BYN'];

    const [inputAmount, setInputAmount] = useState(null);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toUSD, setToUSD] = useState(0);
    const [toEUR, setToEUR] = useState(0);
    const [toRUB, setToRUB] = useState(0);
    const [toBYN, setToBYN] = useState(0);
    const [rates, setRates] = useState({});

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await axios.get(
                    `https://api.exchangerate-api.com/v4/latest/USD`
                );
                const filteredRates = Object.fromEntries(
                    Object.entries(response.data.rates).filter(([key]) =>
                        currencies.includes(key)
                    )
                );
                setRates(filteredRates);
            } catch (error) {
                console.error('Ошибка при загрузке курсов:', error);
            }
        };
        fetchRates();
    }, []);

    useEffect(() => {
        if (rates[fromCurrency]) {
            const amountInUSD = inputAmount / rates[fromCurrency];
            setToUSD(amountInUSD);
            setToEUR(amountInUSD * rates['EUR']);
            setToRUB(amountInUSD * rates['RUB']);
            setToBYN(amountInUSD * rates['BYN']);
        }
    }, [inputAmount, fromCurrency, rates]);


return (
    <>
        <div className={styles.converter}>
            <Header/>
            <div className={styles.wrapper}>
            <h1 className={styles.title}>Конвертер валют</h1>
            <div>
                <div class={styles.input__wrapper}>
                    <div>
                        <input
                            className={styles.input}
                            type="text"
                            placeholder='Введите количество'
                            value={inputAmount}
                            onChange={(e) => setInputAmount(e.target.value)}
                    />
                    </div>
                    <div>
                        <select
                            className={styles.selection}
                            value={fromCurrency}
                            onChange={(e) => setFromCurrency(e.target.value)}
                        >
                            {currencies.map((currency) => (
                                <option key={currency} value={currency}>
                                    {currency}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className={styles.ans__wrapper}>
                <p className={styles.ans}>USD: {toUSD.toFixed(2)} USD</p>
                <p className={styles.ans}>EUR: {toEUR.toFixed(2)} EUR</p>
                <p className={styles.ans}>RUB: {toRUB.toFixed(2)} RUB</p>
                <p className={styles.ans}>BYN: {toBYN.toFixed(2)} BYN</p>
            </div>
            </div>
        </div>
        <Footer/>
    </>
)
}