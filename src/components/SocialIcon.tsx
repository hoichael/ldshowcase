import styles from "/styles/SocialIcon.module.css"

interface Props {
    which: string;
}

const SocialIcon: React.FC<Props> = ( { which } ) => {

    return (
        <div className={styles.container}>
        </div>
    )
}

export default SocialIcon