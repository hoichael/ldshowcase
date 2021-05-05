import styles from "/styles/SocialIcon.module.css"

interface Props {
    url: string;
    src: string;
    title: string;
}

const SocialIcon: React.FC<Props> = ( { url, src, title } ) => {

    return (
        <a className={styles.link} href={url} title={title}>
            <div className={styles.icon}>
                <img className={styles.img} src={src}></img>
            </div>
        </a>
    )
}

export default SocialIcon