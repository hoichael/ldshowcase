import styles from "/styles/SocialBar.module.css"

interface Props {
    which: string;
}

const SocialBar: React.FC<Props> = ( { which } ) => {

    return (
        <div className={styles.container}>
        </div>
    )
}

export default SocialBar
