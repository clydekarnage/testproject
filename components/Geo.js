import styles from '../styles/Coins.module.css'

const Geo = ({ country, id, countrycode }) => {
    return (
        <div className={styles.coin__container}>
            <div className={styles.coin__row}>
                <div className={styles.coin}>
                    <p className={styles.coin__symbol}>{country}</p>
                </div>
                <div className={styles.coin__data}>
                    <p className={styles.coin__price}>{countrycode}</p>
                </div>
            </div>
        </div>
    )
}
export default Geo