import styles from "/styles/SocialBar.module.css"

const SocialBar: React.FC = () => {

    return (
            <div className={styles.container}>
                <div className={styles.icon}>
                    <img src="github.svg"></img>
                    <a href="https://github.com/hoichael"></a>
                </div>
                <div className={styles.icon}>
                    <img src="soundcloud.svg"></img>
                </div>
                <div className={styles.icon}>
                    <img src="github.svg"></img>
                </div>
            </div>
    )
}

export default SocialBar
