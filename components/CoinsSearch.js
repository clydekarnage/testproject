import styles from '../styles/Searchbar.module.css'

const CoinsSearch = ({ ...rest }) => {
    return (
        <div className={styles.coin__search}>
            <input className={styles.coin__input} {...rest} />
        </div>
    )
}

export default CoinsSearch;