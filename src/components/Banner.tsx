import styles from "/styles/Banner.module.css"

const Banner: React.FC = () => {

    const yearZero = "2019"
    const yearCurrent = new Date().getFullYear();

    return (
        <div className={styles.container}>
            <div className={styles.title}>Ludum Dare Games {yearZero} - {yearCurrent}</div>
        </div>
    )
}

export default Banner