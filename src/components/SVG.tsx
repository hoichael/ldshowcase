import styles from "/styles/SVG.module.css"

const SVG: React.FC = () => {

    return (
        <div className={styles.container}>
            <svg className={styles.svg} viewBox="0 0 40 10" preserveAspectRatio="none">
                <path className={styles.path} d="M0 0 L20 0 L20 10 M20 0 L40 0" fill="none" stroke="green"></path>
            </svg>
        </div>
    )
}

export default SVG
